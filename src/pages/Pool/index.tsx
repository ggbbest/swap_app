import React, { useContext, useMemo } from 'react'
import { CustomTitle } from '../../utils/customTitle'
import { ThemeContext } from 'styled-components'
import { Pair } from '../../../local_modules/swap-sdk'
import { Link } from 'react-router-dom'
import { SwapPoolTabs } from '../../components/NavigationTabs'

import Question from '../../components/QuestionHelper'
import FullPositionCard from '../../components/PositionCard'
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks'
import { StyledInternalLink, TYPE } from '../../theme'
import { Text } from 'rebass'
import { LightCard } from '../../components/Card'
import { RowBetween } from '../../components/Row'
import { ButtonPrimary } from '../../components/Button'
import { AutoColumn } from '../../components/Column'

import { useActiveWeb3React } from '../../hooks'
import { usePairs } from '../../data/Reserves'
import { toLiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks'
import AppBody from '../AppBody'
import { Dots } from '../../components/swap/styleds'

export default function Pool() {
  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()

  // fetch the user's balances of all tracked LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map(tokens => ({ liquidityToken: toLiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
// for(let i=0;i<trackedTokenPairs.length;i++){
//   console.log(
//     "\n=============== [" + i.toString() + "] trackedTokenPairs =================== \n"
//     + "["+ trackedTokenPairs[i][0].symbol  +"/" + trackedTokenPairs[i][1].symbol  +"]"
//     + "["+ trackedTokenPairs[i][0].name    +"/" + trackedTokenPairs[i][1].name    +"]"
//     + "["+ trackedTokenPairs[i][0].address +"/" + trackedTokenPairs[i][1].address +"]"
//     + "["+ trackedTokenPairs[i][0].chainId +"/" + trackedTokenPairs[i][1].chainId +"]")
// }
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map(tpwlt => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens
  ])
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  ) 
  // console.log("liquidityTokens : "+liquidityTokens[0].name)
  // console.log("v2PairsBalances"+v2PairsBalances)
  // console.log("fetchingV2PairBalances"+fetchingV2PairBalances)
  // fetchingV2PairBalances : { [tokenAddress: string]: TokenAmount | undefined; }
  // v2PairsBalances : [tokenAddress: string]: TokenAmount | undefined;
  // fetch the reserves for all V2 pools in which the user has a balance

  const liquidityTokensWithBalances = useMemo(
    () => tokenPairsWithLiquidityTokens.filter(
        ({ liquidityToken }) => v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )
  // console.log("v2PairsBalances : "+tokenPairsWithLiquidityTokens.forEach(Token; tokens: [Token, Token]; }, index: number, array: { liquidityToken: Token; tokens: [Token, Token]; }[]) ))
  // console.log("v2PairsBalances : "+v2PairsBalances[1]?.token.name)
  // console.log("liquidityTokens[5].address : "+ liquidityTokens[5].address)
  liquidityTokensWithBalances.push()
// // let i=liquidityTokens.length;
// for(let i=0;i<tokenPairsWithLiquidityTokens.length;i++)
// {
//   console.log(i+" ["+tokenPairsWithLiquidityTokens[i].liquidityToken.name +"] ["+tokenPairsWithLiquidityTokens[i].liquidityToken.address +"] ["+tokenPairsWithLiquidityTokens[i].liquidityToken.chainId +"] ["+tokenPairsWithLiquidityTokens[i].liquidityToken.symbol +"]\n")
//   console.log(i+" ["+tokenPairsWithLiquidityTokens[i].tokens[0].name +"] ["+tokenPairsWithLiquidityTokens[i].tokens[0].address +"] ["+tokenPairsWithLiquidityTokens[i].tokens[0].symbol +"] ["+tokenPairsWithLiquidityTokens[i].tokens[0].chainId +"]\n")
//   console.log(i+" ["+tokenPairsWithLiquidityTokens[i].tokens[1].name +"] ["+tokenPairsWithLiquidityTokens[i].tokens[1].address +"] ["+tokenPairsWithLiquidityTokens[i].tokens[1].symbol +"] ["+tokenPairsWithLiquidityTokens[i].tokens[1].chainId +"]\n")
// }

// console.log("tokenPairsWithLiquidityTokens[0].liquidityToken.name : "+tokenPairsWithLiquidityTokens[0].liquidityToken.name)
const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
// console.log("v2Pairs.length:"+v2Pairs.length)
// let lqbal = liquidityTokensWithBalances.map(({ tokens }) => tokens) 
// console.log("lqbal.length : "+lqbal.length)
const v2IsLoading =
fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some(V2Pair => !V2Pair)

const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

// // // let i=liquidityTokens.length;
// for(let i=0;i<liquidityTokens.length;i++)
// {
//   console.log(i+" ["+liquidityTokens[i].name +"]\n["+liquidityTokens[i].symbol +"]\n["+liquidityTokens[i].address+"]\n["+liquidityTokens[i].chainId+"]")
// }

  return (
    <>
      <CustomTitle titleStr={'Add Liquidity To Swap Pool and Earn Interest | DeFi Swap'}></CustomTitle>
      <AppBody>
        <SwapPoolTabs active={'pool'} />
        <AutoColumn gap="lg" justify="center">
          <ButtonPrimary id="join-pool-button" as={Link} disabled={!account} style={{ padding: 16 }} to="/swap-add/ETH">
            <Text fontWeight={500} fontSize={20}>
              Add Liquidity
            </Text>
          </ButtonPrimary>

          <AutoColumn gap="12px" style={{ width: '100%' }}>
            <RowBetween padding={'0 8px'}>
              <Text color={theme.text1} fontWeight={500}>
                Your Liquidity
              </Text>
              <Question text="When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below." />
            </RowBetween>

            {!account ? (
              <LightCard padding="40px">
                <TYPE.body color={theme.text3} textAlign="center">
                  Connect to a wallet to view your liquidity.
                </TYPE.body>
              </LightCard>
            ) : v2IsLoading ? (
              <LightCard padding="40px">
                <TYPE.body color={theme.text3} textAlign="center">
                  <Dots>Loading</Dots>
                </TYPE.body>
              </LightCard>
            ) : allV2PairsWithLiquidity?.length > 0 ? (
              <>
                {allV2PairsWithLiquidity.map(v2Pair => (
                  <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                ))}
              </>
            ) : (
              <LightCard padding="40px">
                <TYPE.body color={theme.text3} textAlign="center">
                  No liquidity found.
                </TYPE.body>
              </LightCard>
            )}

            <div>
              <Text textAlign="center" fontSize={14} style={{ padding: '.5rem 0 .5rem 0' }}>
                {"Don't see a pool you joined? "}
                <StyledInternalLink id="import-pool-link" to={'/find'}>
                  Import it.
                </StyledInternalLink>
              </Text>
            </div>
          </AutoColumn>
        </AutoColumn>
      </AppBody>
    </>
  )
}
