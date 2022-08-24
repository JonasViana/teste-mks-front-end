import styled from "styled-components"

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
`



export const Name = styled.p`
  display: flex;
  align-items: center;
  height: 38px;
  margin-right: 3px;
  width: 218px;
  justify-content: space-around;


  span{
    width: 90px;
    height: 26px;
    background-color: #373737;
    font-weight: 700;
    font-size: 15px;
    border-radius: 5px;
    color: #FFFFFF;
    padding: .2rem;
  }
`

export const Products = styled.div`
  display: flex;
  width: 70vw;
  flex-wrap: wrap;
  height: 75vh;

  li{
    font-family: 'montserrat';
    margin-right: 1rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  img{
    width: 147px;
    height: 138px
    ;
  }

  button{
    width: 218px;
    height: 32px;
    background-color: #0F52BA;
    border: none;
    border-radius: 0px 0px 8px 8px;
    color: #FFFFFF;
    font-family: 'montserrat';
    font-weight: 600;
    font-size: 14px;
  }

  button:hover{
    background-color: rgba(17, 6, 226, 1);
    transition: .3s;
    cursor: pointer;
  }
  }
`
