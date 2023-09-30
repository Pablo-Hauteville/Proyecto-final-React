import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore} from "firebase/firestore"
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import LoaderComponent from '../components/Loader/loaderComponent'



const Home = () => {
  const [products, setProducts] = useState( [] );

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const db = getFirestore();
    
    const productsCollection = collection (db,"products");

    getDocs(productsCollection).then((snapshot) => {
    setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    setLoading(false);

  }, [] );

  return loading ? <LoaderComponent /> : <ItemListContainer productsData={products} />

};
  

export default Home
