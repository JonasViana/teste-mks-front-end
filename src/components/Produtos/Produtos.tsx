import {Main, Name, Page, Products} from './styles'

import { IoBagHandleSharp } from 'react-icons/io5'

type Product = {
  id:number;
  name:string;
  brand:string;
  description:string;
  photo:string;
  price:number
}

type ProdutoProps = {
  products: Product[]
}

const Produtos = (products:ProdutoProps) => {
  return (
    <Page>
       <Products>
       {products.products.map((product) => (
        <Main>
          <img src={product.photo} alt="Imagem produto" />
          <Name><p>{product.name}</p><span>R${product.price}</span></Name>
          <button><IoBagHandleSharp/> Comprar</button>
        </Main>
      ))}
       </Products>
    </Page>
  )
}

export default Produtos