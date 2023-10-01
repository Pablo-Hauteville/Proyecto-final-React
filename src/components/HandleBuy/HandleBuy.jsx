import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CheckoutModal from '../CheckoutModal/CheckoutModal';

const HandleBuy = () => {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);

  const handleBuyClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleRemoveProduct = (productId) => {
    const updatedCart = cart.filter(producto => producto.id !== productId);
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div>
      <Button onClick={handleBuyClick} style={{ background: "green", border:"none", width: "300px", height:"70px", margin: "10px", fontSize:"25px"}}>
        Comprar Ahora
      </Button> 
      <CheckoutModal 
        show={showModal} 
        handleClose={handleCloseModal} 
        cart={cart} 
        handleRemoveProduct={handleRemoveProduct} 
      />
    </div>
  )
}

export default HandleBuy;




