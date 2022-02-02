const CroDefiSwapFactory = artifacts.require('CroDefiSwapFactory')

module.exports = async function(deployer, network, accounts) {
  let feeSetter
  if (network === 'c4ei') {
    feeSetter = '0xAd70df6Bd78734721F42CD8cCACe42b25D83Aa65'
  } else {
    feeSetter = accounts[0].toString()
  }
  await deployer.deploy(CroDefiSwapFactory, feeSetter, 30, 5)
  console.log(`Deployed CroDefiSwapFactory on network ${network} with ${feeSetter} as feeSetter`)
}
