import { useState } from "react";
import { ConverterStyle, Result } from "../../assets/style/styled-CoinConverter"
import { ConvertRequestAPI } from "../../api/coinConverter-request";
import { useContextState } from '../../provider/Context'
import { Coins } from "./Coins";

export const CoinConverter = () => {

    const [money, setMoney] = useState(1.00)
    const [selectedOptionDe, setSelectedOptionDe] = useState('');
    const [selectedOptionPara, setSelectedOptionPara] = useState('');
    const [result, setResult] = useState()
    const { theme } = useContextState()

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
                        <Coins />
                    </select>
                </span>

                <span>
                    <h3>Para</h3>
                    
                    <select 
                        value={selectedOptionPara}
                        onChange={e => setSelectedOptionPara(e.target.value)}
                    >
                        <Coins />
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