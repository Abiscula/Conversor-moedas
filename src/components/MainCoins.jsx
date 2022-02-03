import react, { useEffect, useState } from 'react'
import { requestAPI } from '../api/mainCoins-request'
import { StyledMain, Fade } from '../assets/style/styled-MainCoins'
import bitcoin from '../assets/img/bitcoin.png'
import money from '../assets/img/money.png'
import { useContextState } from '../provider/Context'

export const MainCoins = () => {

    const [data, setData] = useState({})
    const { theme } = useContextState()


    async function currencyValues() {
        let resp = await requestAPI()
        setData(resp)
    }
    

    useEffect(() => {

        currencyValues()
        // const interval = setInterval(() => {
        //     response_request()
        // }, 60000);
        
        // return () => clearInterval(interval);
    }, [])

    return (
        <StyledMain theme={theme}>
            <Fade><img src={bitcoin} /></Fade>
            <h2>Principais moedas</h2>
            <p>1 Dolar = R$: {data['dolar-real']}</p>
            <p>1 Euro = R$: {data['euro-real']}</p>
            <p>1 Bitcoin = R$: {data['btc-real']}</p>
            <img src={money} />
        </StyledMain>
    )
}