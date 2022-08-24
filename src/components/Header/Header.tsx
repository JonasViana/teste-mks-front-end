import { Main } from './styles'
import { useState } from 'react'
import Sidebar from '../SideBar/Sidebar'

import { TiShoppingCart } from 'react-icons/ti'

const Header = () => {
  const [sideBar, setSidebar] = useState(false)

  return (
    <header>
      {!sideBar && <Main>
        <p><span>MKS</span>Sistemas</p>
        <button onClick={() => setSidebar(!sideBar)}>
          <TiShoppingCart />
        </button>
      </Main>}
      {sideBar &&
        <><Main>
          <p><span>MKS</span>Sistemas</p>
          <button className='button' onClick={() => setSidebar(!sideBar)}>
            X
          </button>
        </Main><Sidebar /></>}
    </header>
  )
}

export default Header