import { useContext } from "react";
import "../styles/containerCart.css";
import ItemCart from "./ItemCart";
import { listCartContext } from "./components item/ProviderContextCart";
import { controllerShowCart } from "./ContextCart";
import { Link } from "react-router-dom";

const ContainerCart = () => {
   
   const { listCart, clearCart } = useContext(listCartContext)
   const { cartShow, setCartShow } = useContext(controllerShowCart) 
   
   const style = {
        display: cartShow
   }

   const closeCart = () => {
    setCartShow( (cartShow === "none") ? "flex" : "none" )
   }

   
   return (
        <div className="cart" style={style}>

            <div className="cerrar">
                <button className="close" onClick={closeCart}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div className="containerItemsCart">
                    {
                        (listCart.length === 0 ) ? <span className="emptyCart">Tu carrito esta vacio, llenalo! </span>
                        : listCart.map( product  => (
                           <ItemCart                             
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.imageProduct.firstImage}
                                quantity={product.quantity}
                                price={product.price}
                            />
                        ))
                    }
            </div>

            <div className="TerminarCompra">
                <Link to="/endPurchase" className="terminar">Terminar Compra</Link>
                
                <button className="clear" onClick={clearCart}>
                    <i class="fa-solid fa-trash-can"></i>
                </button>

            </div>
        </div>
    )
} 

export default ContainerCart;