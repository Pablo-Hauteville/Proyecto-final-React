import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from 'react-bootstrap';

const AddCart = ({ productData }) => {
  const handleAddToCart = () => {

    console.log("Agregando al carrito");
    
    const producto = {
      id: productData.id, 
      nombre: productData.title, 
      precio: productData.price, 

    };
    const cartStorage = JSON.parse(sessionStorage.getItem('cart')) || [];
    cartStorage.push(producto);
    sessionStorage.setItem("cart", JSON.stringify(cartStorage));
    
  }

  return (
    <div>       
      <Button onClick={handleAddToCart} style={{ background: "green", border:"none", width: "150px", height:"50px", margin: "10px"}}>
        Agregar al carrito
      </Button>
    </div>
  )
}

export default AddCart;

