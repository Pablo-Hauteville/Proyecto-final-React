import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./CheckoutModal.css";

const CheckoutModal = ({ show, handleClose, cart }) => {

  const [cartItems, setCartItems] = useState(cart);

  const grupProducts = {};

  let total = 0;
  for (const producto of cart) {
    const productoId = producto.id;
    total += parseInt(producto.precio);

    if (grupProducts[productoId]) {
      grupProducts[productoId].cantidad += 1;
    } else {
      grupProducts[productoId] = {
        ...producto,
        cantidad: 1
      };
    }
  }

  const handleRemoveProduct = (productId) => {
    const updatedCart = cartItems.filter(producto => producto.id !== productId);
    setCartItems(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  } 
  console.log()

  return (
    <Modal show={show} onHide={handleClose} dialogClassName='modal-custom'>
      <Modal.Header closeButton>
        <Modal.Title>Tu carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {Object.values(grupProducts).map((producto) => (
          <div key={producto.id}>
            <p>{producto.nombre}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio: USD $ {producto.precio}</p>
            <Button onClick={() => handleRemoveProduct(producto.id)}>Eliminar</Button>
          </div>
        ))}

        <div className="total">
          <p>Total: USD ${total}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Continuar compra</Button>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CheckoutModal;


