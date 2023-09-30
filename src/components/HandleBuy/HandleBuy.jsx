import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CheckoutModal from '../CheckoutModal/CheckoutModal';

const HandleBuy = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  return (
    <div>
      <Button onClick={handleBuyClick} style={{ background: "green", border:"none", width: "150px", height:"50px", margin: "10px"}}>
        Comprar Ahora
      </Button> 
      <CheckoutModal 
        show={showModal} 
        handleClose={handleCloseModal} 
        cart={cart} 
      />
    </div>
  )
}

export default HandleBuy;


