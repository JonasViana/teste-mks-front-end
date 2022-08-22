import {Main} from './styles'

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
    <>
      {products.products.map((product) => (
        <Main>
          <img src={product.photo} alt="Imagem produto" />
          <p>{product.name}{product.price}</p>
          <p>{product.description}</p>
        </Main>
      ))}
    </>
  )
}

export default Produtos