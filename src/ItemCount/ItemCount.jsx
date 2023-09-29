import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext/CartContext'

const ItemCount = () => {
const [count, setCount] = useState(0);

const { cartItems, setCartItems} = useContext (CartContext);

const handleAddProducts = () => { setCartItems(cartItems + 1); setCount(count+1); }



const handleRemoveProducts = () => { setCartItems(cartItems - 1); setCount(count-1);}


  return (
    <div>
    <Button onClick={handleRemoveProducts}>-</Button>
    <label>{count}</label>
    <Button onClick={handleAddProducts}>+</Button>
    </div>
  )
}

export default ItemCount;
