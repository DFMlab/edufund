//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract ProjectAdmin {

    /// @dev stores all the admins
    mapping(address => bool) private _admins;

    mapping(address => bool) private _projects;

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

    function addProject(address project) external onlyAdmin returns(bool) {
        _projects[project] = true;
        return true;
    }

    function removeProject(address project) external onlyAdmin returns(bool) {
        _projects[project] = false;
        return true;
    }

}