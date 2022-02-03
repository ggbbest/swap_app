# DeFi Swap Interface

[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

As a new DeFi protocol, DeFi Swap is designed to be the best place to swap and farm DeFi coins at the best available rate, leveraging proven and audited protocols, while offering an outstanding incentive program powered by CRO.

Please visit https://crypto.com/defi for more information!

## Submit a token request

Please see the [swap-token-list](https://github.com/crypto-com/swap-token-list) repository.

## Development

Please update the .env file to ensure full functionality.

### Build local modules

```bash

cd /home/dev/www/swap.c4ei.net/local_modules/swap-sdk
yarn build
```

### Install dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"{YOUR_NETWORK_URL}"` 

cd /home/dev/www/farm_swap/swap.c4ei.net
yarn start

/home/dev/www/farm_swap/swap.c4ei.net/src/pages/Boost/index.tsx
// import { INIT_CODE_HASH } from '../../constants'
// import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
// import { keccak256 } from '@ethersproject/solidity'
// const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])
// document.write(COMPUTED_INIT_CODE_HASH)
/home/dev/www/farm_swap/swap.c4ei.net/.env --> INIT_CODE_HASH


/home/dev/www/farm_swap/swap.c4ei.net/sdk/pre_dev/router/contracts/libraries/CroDefiSwapLibrary.sol
function pairFor
hex'69d637e77615df9f235f642acebbdad8963ef35c5523142078c9b8f9d0ceba7e' // init code hash
--> f9c5e83424f2294341bfe3c4b0c0a435fbc1f4a4826d436ef211e419527c6ce2

/home/dev/www/farm_swap/swap.c4ei.net/src/pages/Boost/index.tsx

.env change 

factory json copy --> 
/home/dev/www/farm_swap/swap.c4ei.net/local_modules/swap-sdk/src/abis

/home/dev/www/farm_swap/swap.c4ei.net/src/index.html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
<meta http-equiv="Access-Control-Allow-Origin" content="*" />


https://subgraph.c4ei.net/subgraphs/name/c4ei/swap/graphql
https://subgraph.c4ei.net/subgraphs/name/graphprotocol/ens/graphql

create pair --> success


/home/dev/www/farm_swap/swap.c4ei.net/sdk/pre_dev/ENSDeployer.sol

cp -r /home/dev/www/farm_swap/swap.c4ei.net/node_modules/@ensdomains /home/dev/www/farm_swap/swap.c4ei.net/sdk/chg_node/


/home/dev/www/farm_swap/swap.c4ei.net/src/state/user/hooks.tsx
export function toLiquidityToken([tokenA, tokenB]: [Token, Token]): Token {
  return new Token(tokenA.chainId, Pair.getAddress(tokenA, tokenB), 18, 'CRO-SWAP', 'CRO Defi Swap')
}
