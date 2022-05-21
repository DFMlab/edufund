//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Project {
    /// @dev stores all the admins
    mapping(address => uint256) private _donors;

    string [] public _progressURIs;

    struct ProjectStage {
        uint256 targetAmount;
        uint256 deadline;
        address payable walletAddress;
    }

    mapping(uint256 => ProjectStage) private _projectStage;

    uint8 private _currentProjectStage;

    uint8 private _totalProjectStage;

    enum ProjectState {
        ACTIVE,
        NOT_ACTIVE,
        STOP
    }

    ProjectState public _projectState;

    ProjectState private _projectStateRevert;

    address private _projectAdmin;

    address payable public _owner;

    uint256 public _availableAmount;

    uint256 public _totalRaised;

    uint256 public _totalTargetAmount;

    uint256 public _deadline;

    string public _dataURI;

     modifier onlyOwner() {
        require(_owner == payable(msg.sender), "onlyAdminError");
        _;
    }

    modifier onlyprojectAdmin() {
        require(_owner == msg.sender, "onlyAdminError");
        _;
    }

    modifier isActive() {
        require(_projectState == ProjectState.ACTIVE, "projectNotActiveError");
        _;
    }

    modifier isAcceptingDonation() {
        require(_projectState == ProjectState.ACTIVE, "projectNotActiveError");
        require(_deadline > block.timestamp || _deadline == 0, "dealineError");
        _;
    }

    constructor(
        address payable owner,
        string memory dataURI,
        uint256 [] memory deadlines,
        uint256[] memory targetAmounts,
        address payable [] memory walletAddresses
    ) {
        _owner = owner;
        _currentProjectStage = 0;
        _dataURI = dataURI;
        _projectAdmin = msg.sender;

        addStages(targetAmounts, walletAddresses, deadlines);
    }

    function addStages(
        uint256[] memory targetAmounts,
        address payable[] memory walletAddresses,
        uint256[] memory deadlines
    ) internal {

        uint8 targetLength = uint8(targetAmounts.length);

        require(
                targetLength == uint8(walletAddresses.length) && targetLength == uint8(deadlines.length),
            "stagesLengthMismatchError"
        );

        uint256 totalTargetAmount;

        for (uint8 index = 0; index < targetLength; index++) {
    
            uint256 targetAmount = targetAmounts[index];

            _projectStage[index] = ProjectStage(
               targetAmount,
               deadlines[index],
                walletAddresses[index]
            );
            
            totalTargetAmount +=  targetAmount;
        }

        _totalProjectStage = targetLength - 1;

        _totalTargetAmount = totalTargetAmount;

        _deadline = _getMaxDeadline(deadlines);

    }

    function _getMaxDeadline(uint256 [] memory deadlines) internal pure returns(uint256) {
        uint256 maxDeadline = 0;
        for (uint8 index; index < deadlines.length; index++) {
            uint256 deadline = deadlines[index];
            if(deadline > maxDeadline) {
                maxDeadline = deadline;
            }
        }
        return maxDeadline;
    }

    // to recieve coin
    receive() external payable {
        donate();
    }

    function donate() public payable isAcceptingDonation {
        uint256 value = msg.value;
        _totalRaised += value;
        _availableAmount += value;

        _donors[msg.sender] +=  value;
    }

    function withdraw() external payable isActive {
        require(_currentProjectStage <= _totalProjectStage, "projectStageExceedLimitError");
        ProjectStage memory _currentProject = _projectStage[_currentProjectStage];
        require(block.timestamp >= _currentProject.deadline, "deadlineNotExceededError");

        uint256 targetAmount = _currentProject.targetAmount;

        require(_availableAmount >= targetAmount, "insufficientFundError");

        _availableAmount -= targetAmount;

        _currentProjectStage++;

        _currentProject.walletAddress.transfer(targetAmount);

    }

    function forceWithdraw() external payable isActive {
        require(_currentProjectStage <= _totalProjectStage, "projectStageExceedLimitError");
        require(block.timestamp >= _deadline, "deadlineNotExceededError");

        ProjectStage memory _currentProject = _projectStage[_currentProjectStage];

        uint256 targetAmount = _currentProject.targetAmount;

        require(_availableAmount < targetAmount, "sufficientFundError");

        _availableAmount = 0;

        _projectState = ProjectState.NOT_ACTIVE;

        _currentProject.walletAddress.transfer(_availableAmount);

    }

    function claimExcess() external payable isActive onlyOwner {
        require(_currentProjectStage > _totalProjectStage, "projectStageNotExceedLimitError");
        require(_totalRaised > _totalTargetAmount, "insufficientFundError");


        _availableAmount = 0;

        _projectState = ProjectState.NOT_ACTIVE;

        _owner.transfer(_availableAmount);
    }

    function refund() external payable {
        require(_projectState != ProjectState.ACTIVE, "projectActiveError");
        address sender = msg.sender;
        require(sender != address(0), "zeroAddressError");
        uint256 amountDonated = _donors[sender];
        require(amountDonated > 0, "notADonorError");
        require(_availableAmount > 0, "sufficientFundError");

        uint256 amountToSend = amountDonated;

        if(amountDonated > _availableAmount) {
            _donors[sender] -= _availableAmount;
            amountToSend = _availableAmount;
            _availableAmount = 0;
        } else {
            _donors[sender] = 0;
            _availableAmount -= amountDonated;
        }

        payable(sender).transfer(_availableAmount);

    }

    function addProgress(string calldata uri) external onlyOwner {
        _progressURIs.push(uri);  
    }

    function undoLastProgress() external onlyOwner {
        _progressURIs.pop();  
    }

    function progressCount() external view returns(uint256) {
        return _progressURIs.length;
    }

    function start() external {
        require(msg.sender == _projectAdmin, "unAuthorizedError");
        require(_projectState == ProjectState.STOP, "projectStartError");
        _projectState = _projectStateRevert;
    }

    function stop()  external {
        require(msg.sender == _projectAdmin, "unAuthorizedError");
        require(_projectState != ProjectState.STOP, "projectStopError");
        _projectStateRevert = _projectState;
        _projectState = ProjectState.STOP;
    }

}
