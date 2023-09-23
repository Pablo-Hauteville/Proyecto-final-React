import React, { useEffect, useState } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import axios from 'axios'
import LoaderComponent from '../components/Loader/loaderComponent'



function getProducts () {
  return axios.get("https://dummyjson.com/products")
}


const Home = () => {
  const [products, setProducts] = useState( [] );

  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    getProducts()
    .then((res)=> {setProducts(res.data.products);})
    .catch((err) => {})
    .finally(()=> setLoading(false));

  }, [] );

  return loading ? <LoaderComponent /> : <ItemListContainer productsData={products} />

};
  

export default Home
