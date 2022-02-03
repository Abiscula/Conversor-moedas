import react, { Fragment } from 'react'
import { MainCoins } from '../components/MainCoins'
import { CoinConverter } from '../components/CoinConverter'
import { News } from '../components/News'
import { Header } from '../assets/style/styled-Home'
import { useContextState } from '../provider/Context'
import {ReactComponent as Light} from '../assets/img/light_icon.svg'


export const Home = () => {

    const { setTheme, theme } = useContextState()
    
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
          <News />
      </Fragment>
    )
}