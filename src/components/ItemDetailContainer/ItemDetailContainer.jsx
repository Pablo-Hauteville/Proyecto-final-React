import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import ItemCount from '../../ItemCount/ItemCount';
import HandleBuy from '../HandleBuy/Handlebuy';
import AddCart from '../../AddCart/AddCart';
import "./ItemDetailContainer.css";



const ItemDetailContainer = ({productData}) => {
  console.log(productData);
  return (
    <Card className='card-detail' key={productData.id}>
      <Card.Img variant="top" src={productData.thumbnail} style={{ maxWidth: "45rem", margin: "auto", display: "block" }}/>
      <Card.Body>
        <Card.Title style={{fontSize: "40px"}}>{productData.title}</Card.Title>
        <Card.Text style={{fontSize: "28px"}}>
        {productData.shortDescription}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{fontSize: "25px"}}>{`Rate ${productData.rating}`}</ListGroup.Item>
        <ListGroup.Item style={{fontSize: "25px"}}>{productData.description}</ListGroup.Item>
        <ListGroup.Item style={{fontSize: "45px"}}>{`USD$${productData.price}`}</ListGroup.Item>
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
