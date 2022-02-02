module.exports = {
  networks: {
    development: {
      host: "192.168.1.148",     // Localhost (default: none)
      port: 21004,            // Standard Ethereum port (default: none)
      network_id: "21004",       // Any network (default: none)
      gas: 5000000
     }
  },
  compilers: {
    solc: {
      version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 999999      // Default: 999999
        },
      }
    }
  }
  
};
