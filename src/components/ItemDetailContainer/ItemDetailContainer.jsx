import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import ItemCount from '../../ItemCount/ItemCount';



const ItemDetailContainer = ({productData}) => {
  console.log(productData);
  return (
    <Card style={{ maxWidth: '45rem'}}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
        {productData.shortDescription}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{`USD$${productData.price}`}</ListGroup.Item>
        <ListGroup.Item>{`Rate ${productData.rating}`}</ListGroup.Item>
        <ListGroup.Item>{productData.description}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <ItemCount />
        <Button style={{ background: "green", border:"none", width: "150px", height:"50px", margin: "10px"}}>Comprar</Button>
        <Button style={{ background: "green", border:"none", width: "150px", height:"50px", margin: "10px"}}>Agregar al carrito</Button>
        
      </Card.Body>
    </Card>
  )
}

export default ItemDetailContainer
