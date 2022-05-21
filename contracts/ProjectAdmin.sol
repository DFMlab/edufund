//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import './Project.sol';

contract ProjectAdmin {

    /// @dev stores all the admins
    mapping(address => bool) private _admins;

    mapping(Project => bool) public _projectsState;

    mapping(uint => Project) public _projects;

    uint256 projectsCount = 0;

    constructor() {
        _admins[msg.sender] = true;
    }

    modifier onlyAdmin() {
        require(_admins[msg.sender], "onlyAdminError");
        _;
    }
   
    function addAdmin(address admin) external onlyAdmin returns(bool)  {
        require(admin != address(0), "zeroAddressError");
        _admins[admin] = true;
        return true;
    }

    function removeAdmin(address admin) external onlyAdmin returns(bool) {
        require(admin != address(0), "zeroAddressError");
        require(msg.sender != admin, "adminCannotRemoveSelf");
        _admins[admin] = false;
        return true;
    }

    function addProject(address payable owner,string memory dataURI,uint256 [] memory deadlines,uint256[] memory targetAmounts,address payable [] memory walletAddresses) external onlyAdmin returns(bool) {
        // _projects[project] = true;
        Project project = new Project(owner,dataURI,deadlines,targetAmounts,walletAddresses);

        _projectsState[project] = true;

        _projects[projectsCount] = project;

        projectsCount++;

        return true;
    }

    function stopProject(Project project) external onlyAdmin returns(bool) {
        _projectsState[project] = false;
        project.stop();
        return true;
    }

    function startProject(Project project) external onlyAdmin returns(bool) {
        _projectsState[project] = true;
        project.start();
        return true;
    }

}