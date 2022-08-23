import { Main, Carrinho, Total, ProdutoAdicionado } from "./styles"


const Sidebar = () => {

  return (
    <Main>
      <Carrinho><p>Carrinho de compras</p></Carrinho>
      <ProdutoAdicionado>

      </ProdutoAdicionado>
      <Total>
        <p>Total:</p>
        <button>Finalizar Compra</button>
      </Total>
    </Main>

  )
}

export default Sidebar