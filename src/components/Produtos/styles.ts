import styled from 'styled-components'

export const Page = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 100vw;
`

export const Name = styled.p`
  align-items: center;
  display: flex;
  height: 38px;
  justify-content: space-around;
  margin-right: 3px;
  width: 218px;

  span {
    background-color: #373737;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
    height: 26px;
    padding: 0.2rem;
    width: 90px;
  }
`

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 75vh;
  width: 60vw;

  li {
    align-items: center;
    display: flex;
    font-family: 'montserrat';
    flex-direction: column;
    margin-right: 1rem;
    margin-top: 3rem;
    img {
      height: 138px;
      width: 147px;
    }

    button {
      background-color: #0f52ba;
      border: none;
      border-radius: 0px 0px 8px 8px;
      color: #ffffff;
      height: 32px;
      font-family: 'montserrat';
      font-weight: 600;
      font-size: 14px;
      width: 218px;
    }

    button:hover {
      background-color: rgba(17, 6, 226, 1);
      cursor: pointer;
      transition: 0.3s;
    }
  }
`
