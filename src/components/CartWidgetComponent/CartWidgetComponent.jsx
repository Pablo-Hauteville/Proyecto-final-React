
import carritoLogo from "../../components/CartWidgetComponent/Carrito.svg"
import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"




const CartWidget =() => {

  /* (Importante) - desestructuracion en el useContext */

  const {cartItems} = useContext(CartContext);

  return (
    <div>
        <img src={carritoLogo} alt="Icono-Carrito" />
        {cartItems}
    </div>

  )  

}

export default CartWidget