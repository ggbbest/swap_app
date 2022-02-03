import { Token, ChainId } from '../../local_modules/swap-sdk'

export const CRO_ADDRESS = process.env.REACT_APP_CRO_TOKEN_ADDRESS
if (typeof CRO_ADDRESS === 'undefined') throw new Error('CRO address is not configured')

const CRO_TOKEN =
  // process.env.REACT_APP_CHAIN_ID === String(ChainId.MAINNET)
  //   // ? new Token(ChainId.MAINNET, CRO_ADDRESS, 8, 'CRO', 'Crypto.com Coin')
  //   // : new Token(ChainId.C4EI, CRO_ADDRESS, 8, 'CRO', 'Crypto Clone Coin')
  //   ? new Token(ChainId.MAINNET, CRO_ADDRESS, 18, 'CERU', 'CERU')
  //   : new Token(ChainId.C4EI, CRO_ADDRESS, 18, 'CERU', 'CERU')
  new Token(ChainId.C4EI, CRO_ADDRESS, 18, 'CERU', 'CERU')
export default CRO_TOKEN
