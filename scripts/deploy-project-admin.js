// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ProjectAdmin = await hre.ethers.getContractFactory("ProjectAdmin");
  const projectAdmin = await ProjectAdmin.deploy();

  await projectAdmin.deployed();

  storeContractData(projectAdmin)

  console.log("Project deployed to:", projectAdmin.address);
}

function storeContractData(contract) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/ProjectAdmin.json",
    JSON.stringify({ ProjectAdmin: contract.address }, undefined, 2)
  );

  const ProjectAdminArtifact = artifacts.readArtifactSync("ProjectAdmin");

  fs.writeFileSync(
    contractsDir + "/ProjectAdmin.json",
    JSON.stringify(ProjectAdminArtifact, null, 2)
  );
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
