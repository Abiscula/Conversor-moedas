import react, { useEffect, useState, Fragment } from 'react'
import { MainCoins } from '../components/MainCoins'
import { CoinConverter } from '../components/CoinConverter'
import { Header } from '../assets/style/styled-Home'
import {ReactComponent as Light} from '../assets/img/light_icon.svg'

export const Home = () => {

    const [theme, setTheme] = useState(false)

    return (
      <Fragment>
          <Header>
            <Light onClick={() => setTheme(state => !state)}/>
          </Header>
          <MainCoins />
          <CoinConverter />
      </Fragment>
    )
}