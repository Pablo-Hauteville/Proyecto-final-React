import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';



const ItemDetailContainer = ({productData}) => {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
        {productData.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{`USD$${productData.price}`}</ListGroup.Item>
        <ListGroup.Item>{`Rate ${productData.rating}`}</ListGroup.Item>
        <ListGroup.Item>{productData.description}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button style={{ background: "green", border:"none"}}>Comprar</Button>
        <Button >Agregar al carrito</Button>
        <Button style={{ background: "red", border:"none"}}>Volver</Button>
        
      </Card.Body>
    </Card>
  )
}

export default ItemDetailContainer
