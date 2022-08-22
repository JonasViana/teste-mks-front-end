import {Main} from './styles'

import { TiShoppingCart } from 'react-icons/ti'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <Main>
        <p><span>MKS</span>Sistemas</p>
        <button>
          <TiShoppingCart/>0
        </button>
      </Main>
    </header>
  )
}

export default Header