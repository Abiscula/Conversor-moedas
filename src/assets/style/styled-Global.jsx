import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${props => props.theme === 1 ? '#F7F6F2' : '#161722'} ;
    }
`