import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { collection, getDocs, getFirestore} from "firebase/firestore"

import LoaderComponent from '../components/Loader/loaderComponent'



const Category = () => {
  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, "products");

    getDocs(productsCollection).then((snapshot) => {
      const allProducts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(allProducts);
      if (categoryId) {
        const filtered = allProducts.filter(product => product.category === categoryId);
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(allProducts);
      }
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <LoaderComponent />;
  }
    
  if (filteredProducts.length === 0) {
    return <div style={{fontSize:"50px", backgroundColor: "black", color: "white", position: "relative", marginTop:"200px"}}>Lo sentimos, no encontramos ningún producto</div>;
  }

  return <ItemListContainer productsData={filteredProducts} />;
};

  

export default Category