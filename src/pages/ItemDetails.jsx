import React from 'react'
import { useParams } from 'react-router-dom'
import {  useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import LoaderComponent from '../components/Loader/loaderComponent';



const ItemDetails = () => {
  const [ loading, setLoading ] = useState (true);

  const [ product, setProduct ] = useState({});

  const {itemId} = useParams ();

  useEffect(() => {

    const db= getFirestore();

    const productItem = doc(db, "products", itemId);
    getDoc(productItem).then(( snapshot ) => {setProduct({id: snapshot.id, ...snapshot.data()})}
    );

    setLoading(false);



  }, [itemId]);
 


  return loading ? <LoaderComponent /> : <ItemDetailContainer productData={product} /> 
};

export default ItemDetails
