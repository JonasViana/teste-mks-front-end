import styled from 'styled-components'

export const Main = styled.div`
  align-items: center;
  background: #0f52ba;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 12, 0.22);
  display: flex;
  font-family: 'montserrat';
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  width: 55vh;
`
export const Carrinho = styled.div`
  color: white;
  font-size: 27px;
  font-weight: 700;
  height: 56px;
  padding-right: 13rem;
  padding-top: 1rem;
  width: 180px;
`
export const Total = styled.div`
  p {
    color: white;
    display: flex;
    display: flex;
    font-family: 'montserrat';
    font-weight: 700;
    font-size: 28px;
    justify-content: space-around;
    padding-left: 2rem;
  }
  button {
    background-color: black;
    color: white;
    font-family: 'montserrat';
    font-size: 28px;
    font-weight: 700;
    height: 97px;
    width: 55vh;
  }

  button:hover {
    cursor: pointer;
    font-size: 32px;
    transition: 0.3s;
  }
`

export const ProdutoAdicionado = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  height: 95px;
  justify-content: space-around;
  width: 395px;
  img {
    height: 60px;
    width: 50px;
  }

  strong {
    margin-left: 2rem;
  }

  p {
    margin-left: 5px;
    margin-right: 5px;
  }

  .deleteProduct {
    border-radius: 50%;
    border: none;
    background-color: #000000;
    color: #ffffff;
    height: 30px;
    margin-bottom: 6rem;
    width: 30px;
  }

  .deleteProduct:hover {
    height: 35px;
    width: 35px;
  }

  .addItem {
    border-radius: 8px;
    border: none;
    font-size: 20px;
  }

  .addItem:hover {
    background-color: #000000;
    color: #ffffff;
  }

  .removeItem {
    border-radius: 8px;
    border: none;
    font-size: 20px;
  }

  .removeItem:hover {
    background-color: #000000;
    color: #ffffff;
  }
`
