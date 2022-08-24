
import { Main, Carrinho, Total, ProdutoAdicionado } from "./styles"

import { useContext } from 'react'
import { AddItemContext } from '../../context/AddItemContext'


const Sidebar = () => {
  let { itemName, itemPrice, itemPhoto, addProduct, setAddProduct, addedPrice, setAddedPrice, qntItems, setQntItems } = useContext(AddItemContext)
  return (
    <Main>
      <Carrinho><p>Carrinho de compras</p></Carrinho>
      {addProduct === false && <Total>
        <p>Total:</p>
        <button >Finalizar Compra</button>
      </Total>}
      {addProduct === true && <><ProdutoAdicionado>
        <img src={itemPhoto} alt="Foto Item Adicionado" />
        <p>{itemName}</p>
        <button className="addItem" onClick={() => {
          setQntItems(qntItems - 1)
          setAddedPrice(+addedPrice - +itemPrice)
          qntItems <= 0 && setQntItems(0)
          qntItems <= 0 && setAddedPrice(0)
        }}>-</button><p>{qntItems}</p><button className="removeItem" onClick={() => {
          setQntItems(qntItems + 1)
          setAddedPrice(+addedPrice + +itemPrice)
        }}>+</button>
        <strong>R${itemPrice}</strong>
        <button onClick={() => {
          setAddProduct(false)
        }} className="deleteProduct">X</button>
      </ProdutoAdicionado><Total>
          <p>Total: <strong>R${addedPrice}</strong></p>
          <button onClick={() => setAddProduct(false)}>Finalizar Compra</button>
        </Total></>}
    </Main>
  )
}

export default Sidebar