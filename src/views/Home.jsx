import react, { useEffect, useState, Fragment } from 'react'
import { MainCoins } from '../components/MainCoins'
import { Header } from '../assets/style/styled-Home'

export const Home = () => {

    return (
      <Fragment>
          <Header />
          <MainCoins />
      </Fragment>
    )
}