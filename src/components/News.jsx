import { useEffect, useState } from 'react'
import axios from 'axios'
import {New, NewsSection} from '../assets/style/styled-News'


export const News = () => {

    const [news, setNews] = useState()

    useEffect(() => {
        (async function getNews() {
            const resp = await axios.get('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&qtd=5&busca=economia')
            let object = resp&&resp.data.items
            setNews(object)
        })()
    }, [])

    return (
        <NewsSection>
            {news != undefined && news.map((report) => {
                let image = JSON.parse(report.imagens.replaceAll('\\', ''))
                let url = 'https://ibge.gov.br/'
                return (
                    <New>
                        <h3>{report.titulo}</h3>
                        <img src={url + image['image_fulltext']} alt="" />
                        <span>{report.data_publicacao}</span>
                        <p>{report.introducao}</p>
                        <a href={report.link}>ver mais</a>
                    </New>
                ) 
            })}
        </NewsSection>
    )
}