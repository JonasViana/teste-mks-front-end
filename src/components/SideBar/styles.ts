import styled from 'styled-components'

export const Main = styled.div`
  background: #0f52ba;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 12, 0.22);
  width: 55vh;
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
    display: flex;
    justify-content: space-around;  
    font-family: 'montserrat';
    font-size: 28px;
    font-weight: 700;
    color: white;
    display: flex;
    padding-left: 2rem;
  }
  button {
    width: 55vh;
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

export const ProdutoAdicionado = styled.div`
width: 395px;
height: 95px;
background-color: #FFFFFF;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: space-around;
margin-left: .8rem;
  img{
    width: 50px;
    height: 60px;
  }

  strong{
    margin-left: 2rem;
  }

  p{
    margin-left: 5px;
    margin-right: 5px;
  }

  .deleteProduct{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
    background-color:#000000;
    color: #FFFFFF;
    margin-bottom: 6rem;
  }

  .deleteProduct:hover{
    height: 35px;
    width: 35px;
  }

  .addItem{
    border-radius: 8px;
    border: none;
    font-size: 20px;
  }

  .addItem:hover{
    background-color: #000000;
    color: #FFFFFF;
  }

  .removeItem{
    border-radius: 8px;
    border: none;
    font-size: 20px;
  }

  .removeItem:hover{
    background-color: #000000;
    color: #FFFFFF;
  }
`
