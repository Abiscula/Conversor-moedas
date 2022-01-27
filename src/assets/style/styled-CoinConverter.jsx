import styled from "styled-components";

export const ConverterStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: space-around;
    height: 15rem;
    width: 60rem;
    background-color: #4B6587;
    box-shadow: rgb(35 55 80 / 30%) 8px 8px 12px;
    border-radius: 20px;
    font-size: 1.1rem;
    font-weight: 400;
    z-index: 2;
    margin-top: 5rem;

    section {
        background-color: #4B6587;
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    }

    span {
        background: none;
    }

    h3 {
        background-color: #4B6587;
        color: #fefefe;
        font-size: 1.08rem;
        margin-bottom: 5px;
        padding-left: 0.5rem;
    }

    input {
        border-radius: 10px;
        background: #fefefe;
        height: 2.5rem;
        border: none;
        width: 12.5rem;
        font-size: 1.1rem;
        padding-left: 0.8rem;
    }


    select {
        background: #fefefe;
        height: 2.5rem;
        border: gray;
        width: 14rem;
        padding-left: 0.8rem;
        border-radius: 10px;
        font-size: 1rem;
    }

    article {
        background: none;
        display: flex;
        width: 70%;
        justify-content: space-around;
        padding-left: 22.5rem;
        button {
            border: none;
            border-radius: 12px;
            padding: 0.6rem;
            width: 8rem;
            font-size: 1rem;
            font-weight: 700;
            background: #F7F6F2;
            color: #4B6587;
            cursor: pointer;
        }

        button:hover {
            background: #C8C6C6;
            color: #4B6587;   
        }
    }
`

export const Result = styled.main`
    align-self: center;
    background: none;
    color: #fefefe;
    font-size: 1.5rem;
`