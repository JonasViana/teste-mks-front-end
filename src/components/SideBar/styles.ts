import styled from 'styled-components'

export const Main = styled.div`
  background: #0f52ba;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 12, 0.22);
  width: 486px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  font-family: 'montserrat';
`
export const Carrinho = styled.div`
  width: 180px;
  height: 56px;
  font-size: 27px;
  font-weight: 700;
  color: white;
  padding-left: 2rem;
  padding-top: 1rem;
`
export const Total = styled.div`
  p {
    font-family: 'montserrat';
    font-size: 28px;
    font-weight: 700;
    color: white;
    display: flex;
    padding-left: 2rem;
  }
  button {
    width: 486px;
    height: 97px;
    background-color: black;
    color: white;
    font-family: 'montserrat';
    font-size: 28px;
    font-weight: 700;
  }

  button:hover {
    cursor: pointer;
    font-size: 32px;
    transition: 0.3s;
  }
`

export const ProdutoAdicionado = styled.div``
