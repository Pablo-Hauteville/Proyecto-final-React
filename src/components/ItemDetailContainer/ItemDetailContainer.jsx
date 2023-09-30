import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import ItemCount from '../../ItemCount/ItemCount';
import HandleBuy from '../HandleBuy/Handlebuy';
import AddCart from '../../AddCart/AddCart';



const ItemDetailContainer = ({productData}) => {
  console.log(productData);
  return (
    <Card style={{ maxWidth: '45rem'}} key={productData.id}>
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
        <HandleBuy />
        <AddCart productData={productData} />

        
      </Card.Body>
    </Card>
  )
}

export default ItemDetailContainer;
