import { Name, Page, Products } from './styles'

import { IoBagHandleSharp } from 'react-icons/io5'

import { useContext } from 'react'
import { AddItemContext } from '../../context/AddItemContext'

type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number
}

type ProdutoProps = {
  products: Product[]
}

const Produtos = (products: ProdutoProps) => {

  const { setItemId, setItemName, setItemPrice, setItemPhoto, setAddProduct, setAddedPrice, setQntItems } = useContext(AddItemContext)
  return (
    <Page>
      {<Products>
        {products.products.map((product) => (
          <li key={product.id}>
            <img src={product.photo} alt="Imagem produto" />
            <Name>{product.name}<span>R${product.price}</span></Name>
            <button onClick={() => {
              setItemId(product.id)
              setItemName(product.name)
              setItemPrice(product.price)
              setItemPhoto(product.photo)
              setAddProduct(true)
              setAddedPrice(0)
              setQntItems(0)
            }} ><IoBagHandleSharp /> Comprar</button>
          </li>
        ))}
      </Products>}
    </Page>
  )
}

export default Produtos

