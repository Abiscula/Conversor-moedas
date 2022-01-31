import { useState } from "react";
import { ConverterStyle, Result } from "../assets/style/styled-CoinConverter"
import { ConvertRequestAPI } from "../api/coinConverter-request";
import { useContextTheme } from '../provider/Context'

export const CoinConverter = () => {

    const [money, setMoney] = useState(1.00)
    const [selectedOptionDe, setSelectedOptionDe] = useState('');
    const [selectedOptionPara, setSelectedOptionPara] = useState('');
    const [result, setResult] = useState()
    const { theme } = useContextTheme()

    async function API_response() {
        let arr = [selectedOptionDe, selectedOptionPara]
        const resp = await ConvertRequestAPI(arr)
        
        if(typeof(resp) == 'string') {
            setResult(resp)
        } else {
            let converted = (resp * money).toFixed(2)
            setResult(converted)
        }
        
    }

    return (
        <ConverterStyle theme={theme}>
            <section>
                <span>
                    <h3>Valor</h3>
                    <input 
                        type="text"
                        defaultValue={money} 
                        onChange={e => setMoney(e.target.value)}
                    />
                </span>

                <span>
                    <h3>De</h3>
                    <select 
                        value={selectedOptionDe}
                        onChange={e => setSelectedOptionDe(e.target.value)}
                    >
                        <option></option>
                        <option value="BRL">BRL - Real</option>
                        <option value="USD">USD - Dolar dos EUA</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="BTC">BTC - Bitcoin</option>
                        <option value="ETH">ETH - Ethereum</option>
                        <option value="JPY">JPY - Iene Japonês</option>
                    </select>
                </span>

                <span>
                    <h3>Para</h3>
                    
                    <select 
                        value={selectedOptionPara}
                        onChange={e => setSelectedOptionPara(e.target.value)}
                    >
                        <option></option>
                        <option value="USD">USD - Dolar dos EUA</option>
                        <option value="BRL">BRL - Real</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="BTC">BTC - Bitcoin</option>
                        <option value="ETH">ETH - Ethereum</option>
                        <option value="JPY">JPY - Iene Japonês</option>
                    </select>
                </span>
            </section>

            <article>
                <Result>{result}</Result>
                <button onClick={() => API_response()}>Converter</button>
            </article>
        </ConverterStyle>
    )
}