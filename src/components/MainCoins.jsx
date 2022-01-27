import react, { useEffect, useState } from 'react'
import { requestAPI } from '../api/mainCoins-request'

export const MainCoins = () => {
        const [data, setData] = useState({});

    async function currencyValues() {
        let resp = await requestAPI()
        console.log(resp)
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
        <div>
            <h2>Principais moedas</h2>
            <p>1 Dolar = R$: {data['dolar-real']}</p>
            <p>1 Euro = R$: {data['euro-real']}</p>
            <p>1 Bitcoin = R$: {data['btc-real']}</p>
        </div>
    )
}