import axios from "axios";

export async function requestAPI() {
    const req = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')

    let coins = {
        'dolar-real': req.data.USDBRL?.bid,
        'euro-real': req.data.EURBRL?.bid, 
        'btc-real': req.data.BTCBRL?.bid,
    }

    return coins
}