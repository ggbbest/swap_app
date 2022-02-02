const fs = require("fs");

const croDefiSwapFactoryFromTruffle = JSON.parse(fs.readFileSync("/home/dev/www/farm_swap/swap.c4ei.net/sdk/2_Factory/build/contracts/CroDefiSwapFactory.json", "utf8"));
const croDefiSwapFactoryFromWaffle = JSON.parse(fs.readFileSync("/home/dev/www/farm_swap/swap.c4ei.net/sdk/2_Factory/build/CroDefiSwapFactory.json", "utf8"));
croDefiSwapFactoryFromTruffle.bytecode = croDefiSwapFactoryFromWaffle.bytecode
fs.writeFileSync("/home/dev/www/farm_swap/swap.c4ei.net/sdk/2_Factory/build/contracts/CroDefiSwapFactory.json", JSON.stringify(croDefiSwapFactoryFromTruffle), "utf8");

console.log("[ReplaceFactory] CroDefiSwapFactory Truffle now using bytecode compiled from Waffle!")
