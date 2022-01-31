import styled, { keyframes } from "styled-components";

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    height: 15rem;
    width: 30rem;
    box-shadow: rgb(35 55 80 / 30%) 0px 6px 12px;
    background-color: ${props => props.theme === 1 ? '#F7F6F2' : '#d8d6cc'};
    color: ${props => props.theme === 1 ? '#4B6587' : '#30302e'};
    border-radius: 20px;
    margin-top: -8rem;
    font-size: 1.1rem;
    font-weight: 700;
    z-index: 2;
    position: relative;

    img:first-child {
        width: 30%;
        background: none;
        display: flex;
        transform: rotate(-40deg)
    }

    img:last-child {
        width: 17%;
        background: none;
        display: flex;
        position: absolute;
        margin-left: 23rem;
        margin-top: 6rem;
    }

    p {
        margin-top: 0.5rem;
    }
`

const fade = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`

export const Fade = styled.span`
    animation: ${fade} 4s linear infinite;
    position: absolute;
    margin-right: 37rem;
    margin-bottom: 33rem;
    width: 150%;
`