require('dotenv').config();
const { ethers } = require("hardhat");

async function main() {
const StorageContract = await ethers.getContractFactory("TournamentManagers");
const storageContract = await StorageContract.deploy();
// process.env.KEY_HASH,process.env.SUB_ID,process.env.VRF_COORDINATOR
await storageContract.waitForDeployment();
const tx = await storageContract.deploymentTransaction();

console.log("Contract deployed successfully.");
console.log(`Deployer: ${storageContract.runner.address}`);
console.log(`Deployed to: ${storageContract.target}`);
console.log(`Transaction hash: ${tx.hash}`);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});