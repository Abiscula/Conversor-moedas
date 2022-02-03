import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    height: 350px;
    background-color: ${props => props.theme === 1 ? '#4B6587' : '#47484c'};
    z-index: 1;
    

    svg {
        display: flex;
        background: none;
        color: #f0f0f0;
        cursor: pointer;
        padding: 1rem;
    }
`