const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PGT Token", function () {
  let Token, token, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    Token = await ethers.getContractFactory("PGT");
    token = await Token.deploy(ethers.parseUnits("100000000", 18));
  });

  it("Should have correct name and symbol", async function () {
    expect(await token.name()).to.equal("Payment Gateway Token");
    expect(await token.symbol()).to.equal("PGT");
  });

  it("Should assign the total supply to the owner", async function () {
    const ownerBalance = await token.balanceOf(owner.address);
    expect(ownerBalance).to.equal(await token.totalSupply());
  });

  it("Should allow transfers between accounts", async function () {
    await token.transfer(addr1.address, 1000);
    expect(await token.balanceOf(addr1.address)).to.equal(1000n);
  });

  it("Should allow owner to mint new tokens", async function () {
    await token.mint(owner.address, 5000);
    expect(await token.totalSupply()).to.equal(ethers.parseUnits("100000000", 18) + 5000n);
  });

  it("Should allow burning of tokens", async function () {
    await token.burn(1000);
    expect(await token.balanceOf(owner.address)).to.equal(ethers.parseUnits("100000000", 18) - 1000n);
  });
});