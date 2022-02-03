import react, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'


export const News = () => {

    const [news, setNews] = useState()

    

    useEffect(() => {
        (async function getNews() {
            const resp = await axios.get('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&qtd=6&busca=economia')
            let object = resp&&resp.data.items
            setNews(object)
        })()
    }, [])

    return (
        <Fragment>
            {news != undefined && news.map((report) => {
                let link = report.link
                // let image = report.imagens
                // console.log(image)
                return (
                    <div>
                        <h3>{report.titulo}</h3>
                        {/* <img src={image} alt="" /> */}
                        <span>{report.data_publicacao}</span>
                        <p>{report.introducao}</p>
                        <a href={link}>Notícia na integra</a>
                    </div>
                ) 
            })}
        </Fragment>
    )
}