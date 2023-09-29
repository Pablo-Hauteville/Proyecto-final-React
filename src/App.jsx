
/* import { useState } from 'react'; */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout';
import MainRouter from './routes/MainRouter';
import { CartProvider } from './CartContext/CartContext';




const App =() => {
    
  return (
  
    <CartProvider>
      <MainLayout>
      <MainRouter />
      </MainLayout>
    </CartProvider>
  

   
  );
};

export default App;
