const CroDefiSwapRouter02 = artifacts.require("CroDefiSwapRouter02");
const fs = require("fs");
const assert = require("assert");

module.exports = async (deployer, network, account) => {
  let wethAddress;
  let factoryAddress;
  // if (network === "mainnet") {
    wethAddress = "0xE94b78D58826eca66a921cEc0E3Bc40BC6707897";
    // Arg [0] : _factory (address): 0x9deb29c9a4c7a88a3c0257393b7f3335338d9a9d --> 0x0baEE3029DEBFcF63aE172460ECDeCdF72FcC047
    // Arg [1] : _WETH (address): 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2  --> 0xE94b78D58826eca66a921cEc0E3Bc40BC6707897
  // } else {
  //   const WETH = JSON.parse(fs.readFileSync(`./WETH/contract-${ network }.json`, "utf8"));
  //   wethAddress = WETH.address;
  // }

  const coreFactoryJSON = JSON.parse(fs.readFileSync("./swap-contracts-core/build/contracts/CroDefiSwapFactory.json", "utf8"));
  const coreFactoryNetwork = Object.keys(coreFactoryJSON.networks)[0];
  // factoryAddress = coreFactoryJSON.networks[coreFactoryNetwork].address;
  factoryAddress = "0x0baEE3029DEBFcF63aE172460ECDeCdF72FcC047";
  assert(factoryAddress !== undefined && factoryAddress !== "");
  await deployer.deploy(CroDefiSwapRouter02, factoryAddress, wethAddress);
  console.log(`CroDefiSwapRouter02 deployed on ${network} with factoryAddress ${factoryAddress} and wethAddress ${wethAddress}`)
};