import styled from "styled-components";

export const NewsSection = styled.section`
    display: flex;
    justify-content: space-around;
    margin-top: 10rem;
    padding-bottom: 5rem;
    
`

export const New = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 16%;
    background-color: rgba(182, 182, 182, 0.397);
    border-radius: 15px;
    box-shadow: rgb(35 55 80 / 30%) 8px 8px 12px;

    h3 {
        display: flex;
        padding: 1.2rem;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background: rgba(75, 101, 135, 0.397);
    }
    
    span {
        font-size: 0.9rem;
        padding-top: 0.2rem;
        padding-left: 1rem;
        padding-right: 1rem;
        text-align: end;
    }

    p {
        padding: 1rem;
    }

    a {
        text-decoration: none;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-bottom: 0.5rem;
        color: #407500;
    }
`