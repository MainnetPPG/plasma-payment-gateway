const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const initialSupply = hre.ethers.parseUnits("100000000", 18); // 100M tokens

  const PGT = await hre.ethers.getContractFactory("PGT");
  const token = await PGT.deploy(initialSupply);

  await token.waitForDeployment();

  console.log("PGT Token deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});