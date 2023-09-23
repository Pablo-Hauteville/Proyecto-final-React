import React from 'react'
import { NewtonsCradle } from '@uiball/loaders'


const LoaderComponent = () => {
  return (
    <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>

   <NewtonsCradle 

   size={100}
   speed={1.4} 
   color="black" 
   
  />
  </div>
  )
}

export default LoaderComponent;
