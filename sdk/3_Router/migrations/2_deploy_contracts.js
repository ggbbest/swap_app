const CroDefiSwapRouter02 = artifacts.require("CroDefiSwapRouter02");
const fs = require("fs");
const assert = require("assert");

module.exports = async (deployer, network, account) => {
  let wethAddress;
  let factoryAddress;
  // if (network === "mainnet") {
  //   wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
  // } else {
    // const WETH = JSON.parse(fs.readFileSync(`./1_WETH/contract-${ network }.json`, "utf8"));
    // wethAddress = WETH.address;
    wethAddress = "0x9783061644bd8F41944EF71a6A73FC575F5a2A96";
  // }

  // const coreFactoryJSON = JSON.parse(fs.readFileSync("./2_Factory/build/contracts/CroDefiSwapFactory.json", "utf8"));
  const coreFactoryJSON = JSON.parse(fs.readFileSync("/home/dev/www/swap.c4ei.net/sdk/2_Factory/build/contracts/CroDefiSwapFactory.json", "utf8"));
  const coreFactoryNetwork = Object.keys(coreFactoryJSON.networks)[0];
  factoryAddress = coreFactoryJSON.networks[coreFactoryNetwork].address;
  assert(factoryAddress !== undefined && factoryAddress !== "");
  await deployer.deploy(CroDefiSwapRouter02, factoryAddress, wethAddress);
  console.log(`CroDefiSwapRouter02 deployed on ${network} with factoryAddress ${factoryAddress} and wethAddress ${wethAddress}`)
};
