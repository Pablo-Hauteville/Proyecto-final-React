import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext/CartContext'

const ItemCount = () => {
const [count, setCount] = useState(0);

const { cartItems, setCartItems} = useContext (CartContext);

const handleAddProducts = () => { 
  setCartItems(cartItems + 1); setCount(count + 1); }



const handleRemoveProducts = () => { 
  if (cartItems > 1) { setCartItems(cartItems - 1); setCount(count - 1);
  }
}


  return (
    <div>
    <Button onClick={handleRemoveProducts} style= {{fontSize: "30px", margin: "5px"}}>-</Button>
    <label style={{fontSize:"20px"}}>{count}</label>
    <Button onClick={handleAddProducts} style= {{fontSize: "30px", margin: "5px"}}>+</Button>
    </div>
  )
}

export default ItemCount;
