import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
// import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'


// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Swap = lazy(() => import('./views/UnderDevelopment/UnderDevelopment'))
const Farm = lazy(() => import('./views/UnderDevelopment/UnderDevelopment1'))
// const Pools = lazy(() => import('./views/UnderDevelopment/UnderDevelopment2'))
const Vaults = lazy(() => import('./views/UnderDevelopment/UnderDevelopment3'))
const Lottery = lazy(() => import('./views/UnderDevelopment/UnderDevelopment4'))
const Nft = lazy(() => import('./views/UnderDevelopment/UnderDevelopment5'))
const Dao = lazy(() => import('./views/UnderDevelopment/UnderDevelopment6'))
const Pad = lazy(() => import('./views/UnderDevelopment/UnderDevelopment7'))
const Analytics = lazy(() => import('./views/UnderDevelopment/UnderDevelopment8'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))


// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/swap" component={Swap}/>
            <Route path="/farms" component={Farm}>
            <Redirect to="/farm" />
            </Route>
            {/* <Route path="/pools" component={Pools}>
            <Pools />
            </Route> */}
            <Route path="/vaults" component={Vaults}/>
            <Route path="/lottery" component={Lottery}/>
            <Route path="/nft" component={Nft}/>
            <Route path="/tigerdao" component={Dao}/>
            <Route path="/tigerpad" component={Pad}/>
            <Route path="/analytics" component={Analytics}/>
            <Route path="/pools">
              <Farms tokenMode/>
            </Route>
            {/* <Route path="/pools"> */}
            {/*  <Pools /> */}
            {/* </Route> */}
            {/* <Route path="/lottery"> */}
            {/*  <Lottery /> */}
            {/* </Route> */}
            {/* <Route path="/ifo"> */}
            {/*  <Ifos /> */}
            {/* </Route> */}
            {/* <Route path="/nft"> */}
            {/*  <Nft /> */}
            {/* </Route> */}
            {/* Redirect */}
            {/* <Route path="/staking"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* <Route path="/syrup"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Menu>
      {/* <NftGlobalNotification /> */}
    </Router>
  )
}

export default React.memo(App)
