import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./CheckoutModal.css";
import HandleRemoveProduct from '../HandleRemoveProduct/HandleRemoveProduct';

const CheckoutModal = ({ show, handleClose, cart, handleRemoveProduct }) => {

  const [localCart, setLocalCart] = useState(cart);

  const grupProducts = {};

  let total = 0;
  for (const producto of localCart) { 
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
            <HandleRemoveProduct onRemoveClick={() => { handleRemoveProduct(producto.id); setLocalCart(prevCart => prevCart.filter(item => item.id !== producto.id)); }} />

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





