const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ProjectAdmin", function () {
  it("Should return the new greeting once it's changed", async function () {
    const ProjectAdmin = await ethers.getContractFactory("ProjectAdmin");
    const projectAdmin = await ProjectAdmin.deploy();
    await projectAdmin.deployed();

    expect(await projectAdmin.addAdmin(0xb794f5ea0ba39494ce839613fffba74279579268)).to.equal(true);

    expect(await projectAdmin.removeAdmin(0xb794f5ea0ba39494ce839613fffba74279579268)).to.equal(true);

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
