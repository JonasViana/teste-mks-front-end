
import { Main, Carrinho, Total, ProdutoAdicionado } from "./styles"

import { useContext, useState, useEffect } from 'react'
import { AddItemContext } from '../../context/AddItemContext'


const Sidebar = () => {
  let { itemName, itemPrice, itemPhoto, addProduct, setAddProduct, qntItem } = useContext(AddItemContext)

  const [qntItems, setQtdItems] = useState(qntItem)

  const [newItemPrice , setNewItemPrice] = useState(itemPrice)

  useEffect(() => {
    setAddProduct(false)
  }, [setAddProduct])
  return (
    <Main>
      <Carrinho><p>Carrinho de compras</p></Carrinho>
      {addProduct === false &&  <Total>
        <p>Total:</p>
        <button >Finalizar Compra</button>
      </Total>}
      {addProduct === true && <><ProdutoAdicionado>
        <img src={itemPhoto} alt="Foto Item Adicionado" />
        <p>{itemName}</p>
        <button className="addItem" onClick={() => {
          setQtdItems(qntItems - 1)
          setNewItemPrice(+newItemPrice - +itemPrice)
        }}>-</button><p>{qntItems}</p><button className="removeItem" onClick={() => {
          setQtdItems(qntItems + 1)
          setNewItemPrice(+newItemPrice + +itemPrice)
        }}>+</button>
        <strong>R${newItemPrice }</strong>
        <button onClick={() => {
          setAddProduct(false)
        }} className="deleteProduct">X</button>
      </ProdutoAdicionado><Total>
          <p>Total: <strong>R${newItemPrice}</strong></p>
          <button>Finalizar Compra</button>
        </Total></>}
    </Main>
  )
}

export default Sidebar