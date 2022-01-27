import axios from "axios";

export async function ConvertRequestAPI(arr) {
    try {
        let param = `${arr[0]}-${arr[1]}`
        const req = await axios.get(`https://economia.awesomeapi.com.br/last/${param}`)

        let resp_path = param.replace('-', '')
        let resp =  req.data[resp_path]?.bid
        return parseFloat(resp)
    } catch(error) {
        let resp = 'Conversão inválida'
        return resp
    }
    
    
}