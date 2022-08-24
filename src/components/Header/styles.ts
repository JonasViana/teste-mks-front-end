import styled from 'styled-components'

export const Main = styled.main`
  font-family: 'Montserrat';
  display: flex;
  background-color: #0f52ba;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
 
  height: 15vh;

  span {
    font-size: 40px;
    font-weight: 600;
    color: #ffffff;
    margin-right: 0.5rem;
  }
  p {
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;
  }
  button {
    width: 90px;
    height: 45px;
    border: none;
    border-radius: 8px;
    z-index: 10;
    background-color: #ffffff;
    color: #000000;
    margin-right: 2rem;
  }

  button:hover {
    pointer-events: stroke;
    background-color: #e1dddd;
    transition: 0.4s;
    cursor: pointer;
  }

  .teste {
    border-radius: 50%;
    background-color: #000000;
    color: white;
    display: inline-block;
    height: 50px;
    width: 50px;
    font-size: 28px;
  }

  .teste:hover {
    background-color: #000000;
    width: 60px;
    height: 60px;
  }
`

export const CgClose = styled.main``
