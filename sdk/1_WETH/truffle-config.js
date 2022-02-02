const { argv } = require("yargs");

module.exports = {
  networks: {
    c4ei: {
      host: "192.168.1.185",     // Localhost (default: none)
      port: 21004,            // Standard Ethereum port (default: none)
      network_id: "21004",       // Any network (default: none)
      gas: 6000000,
      gasPrice: 5000000000, // in wei
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      network_id: "1"
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3"
    },
    kovan: {
      host: "localhost",
      port: 8545,
      network_id: "42"
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4"
    }
  },
  compilers: {
    solc: {
      version: argv.solcVersion
    }
  }
};
