import { Main } from './styles'
import { useState } from 'react'
import Sidebar from '../SideBar/Sidebar'

import { TiShoppingCart } from 'react-icons/ti'
import { CgClose } from 'react-icons/cg'

type Props = {}

const Header = (props: Props) => {
  const [sideBar, setSidebar] = useState(false)

  return (
    <header>
      {!sideBar && <Main>
        <p><span>MKS</span>Sistemas</p>
        <button onClick={() => setSidebar(!sideBar)}>
          <TiShoppingCart />0
        </button>
      </Main>}
      {sideBar &&
        <><Main>
          <p><span>MKS</span>Sistemas</p>
          <button className='teste' onClick={() => setSidebar(!sideBar)}>
            X
          </button>
        </Main><Sidebar /></>}
    </header>
  )
}

export default Header