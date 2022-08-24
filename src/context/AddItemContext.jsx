import { createContext, useState } from "react";

export const AddItemContext = createContext()

export const AddItemProvider = ({ children }) => {
    const [itemId, setItemId] = useState(0)
    const [itemName, setItemName] = useState("")
    const [itemPrice, setItemPrice] = useState(0)
    const [itemPhoto, setItemPhoto] = useState("")
    const [addProduct, setAddProduct] = useState(false)
    const [qntItem, setQntItem] = useState(0)
    const [addedPrice, setAddedPrice] = useState(0)
    const [qntItems, setQntItems] = useState(0)

    return (

        <AddItemContext.Provider value={{ itemId, setItemId, itemName, setItemName, itemPrice, setItemPrice, itemPhoto, setItemPhoto, addProduct, setAddProduct, qntItem, setQntItem,addedPrice, setAddedPrice, qntItems, setQntItems }}>
            {children}
        </AddItemContext.Provider>
    )
}