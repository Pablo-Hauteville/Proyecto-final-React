
/* import { useState } from 'react'; */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout';
import MainRouter from './routes/MainRouter';




const App =() => {
    
  return (
  
    <MainLayout>
      <MainRouter />
    </MainLayout>
  

   
  );
};

export default App;
