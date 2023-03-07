// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract TestContract {
    function func1(uint _numb) external view returns (uint, uint) {
        return (_numb, block.timestamp);
    }

    function func2(uint _numb) external view returns (uint, uint) {
        return (_numb, block.timestamp);
    }
}
