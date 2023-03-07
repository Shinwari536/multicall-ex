// SPDX-License-Identifier: MIT
import "hardhat/console.sol";

pragma solidity ^0.8.4;

contract MultiCall {
    function multicalls(
        address[] calldata targets,
        bytes[] calldata data
    ) external view returns (bytes[] memory) {
        require(targets.length == data.length, "Arrays lengths are not equal.");
        bytes[] memory results = new bytes[](targets.length);
        for (uint i = 0; i < targets.length; i++) {
            (bool success, bytes memory result) = targets[i].staticcall(
                data[i]
            );
            console.logBytes(result);

            if (!success) {
                results[i] = bytes("");
            } else {
                results[i] = result;
            }
        }
        return results;
    }
}
