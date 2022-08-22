import styled from "styled-components"

export const Main = styled.main`
    font-family: 'Montserrat';
    display: flex;
    background-color: #0F52BA;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 5rem;

    span{
        font-size: 40px;
        font-weight: 600;
        color: #FFFFFF;
        margin-right: .5rem;
    }
    p{
        font-weight: 300;
        font-size: 20px;
        color: #FFFFFF;
    }
    button {
        width: 90px;
        height: 45px;
        background-color: #FFFFFF;
        border: none;
        border-radius: 8px;
    }

    button:hover{
        pointer-events: stroke;
        background-color: #E1DDDD;
        transition: .4s;
        cursor: pointer;
    }

`