import styled from 'styled-components'

export const Main = styled.main`
  align-items: center;
  background-color: #0f52ba;
  display: flex;
  font-family: 'Montserrat';
  height: 15vh;
  justify-content: space-between;
  padding-left: 2rem;

  span {
    color: #ffffff;
    font-size: 40px;
    font-weight: 600;
    margin-right: 0.5rem;
  }
  p {
    color: #ffffff;
    font-weight: 300;
    font-size: 20px;
  }
  button {
    background-color: #ffffff;
    border: none;
    border-radius: 8px;
    color: #000000;
    height: 45px;
    margin-right: 2rem;
    width: 90px;
    z-index: 10;
  }

  button:hover {
    background-color: #e1dddd;
    cursor: pointer;
    pointer-events: stroke;
    transition: 0.4s;
  }

  .button {
    border-radius: 50%;
    background-color: #000000;
    color: white;
    display: inline-block;
    height: 50px;
    font-size: 28px;
    width: 50px;
  }

  .button:hover {
    background-color: #000000;
    height: 60px;
    width: 60px;
  }
`
