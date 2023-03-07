import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import abi from "ethereumjs-abi";

describe("Multicall Contract", function () {
  let signers: SignerWithAddress[];
  let multicall: Contract;
  let testContrat: Contract;

  before(async () => {
    signers = await ethers.getSigners();

    const MultiCall = await ethers.getContractFactory("MultiCall");
    multicall = await MultiCall.deploy();
    const TestContract = await ethers.getContractFactory("TestContract");
    testContrat = await TestContract.deploy();
  });

  describe("Working With MultiCall Contract", function () {
    it("Should call the functions of test contract in call at the same time", async function () {
      const func1Bytes = testContrat.interface.encodeFunctionData("func1", [
        1000,
      ]);
      const func2Bytes = testContrat.interface.encodeFunctionData("func2", [
        2000,
      ]);
      const result = await multicall.multicalls(
        [testContrat.address, testContrat.address],
        [func1Bytes, func2Bytes]
      );
      // console.log(func1Bytes);
      // console.log(func2Bytes);
    });
  });
});
