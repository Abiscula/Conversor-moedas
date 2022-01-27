import react, { useEffect, useState, Fragment } from 'react'
import { MainCoins } from '../components/MainCoins'
import { CoinConverter } from '../components/CoinConverter'
import { Header } from '../assets/style/styled-Home'

export const Home = () => {

    return (
      <Fragment>
          <Header />
          <MainCoins />
          <CoinConverter />
      </Fragment>
    )
}