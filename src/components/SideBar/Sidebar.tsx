import { useState } from "react"
import {Side, Button} from './styles'

type Props = {
    
}

const SideBar = (props: Props) => {

    const [sideBar, setSidebar] = useState(false)

  return (
    <div>
        <Button><button onClick={() => setSidebar(!sideBar)}>show</button> </Button>
        <Side className={sideBar.toString()}>
            <p className={sideBar.toString()}>Jonas Mestre</p>
        </Side>
    </div>
  )
}

export default SideBar