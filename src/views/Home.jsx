import react, { useEffect, useState, Fragment } from 'react'
import { MainCoins } from '../components/MainCoins'
import { CoinConverter } from '../components/CoinConverter'
import { Header } from '../assets/style/styled-Home'
import {ReactComponent as Light} from '../assets/img/light_icon.svg'
import { useContextTheme } from '../provider/Context'

export const Home = () => {

    const { setTheme, theme } = useContextTheme()
    
    function changeColor() {
      if (theme === 1) {
        setTheme(2)
      } else {
        setTheme(1)
      }
    }

    return (
      <Fragment>
          <Header theme={theme}>
            <Light onClick={() => changeColor()}/>
          </Header>
          <MainCoins />
          <CoinConverter />
      </Fragment>
    )
}