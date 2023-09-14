import { useContext } from "react";
import "./CartWidget.css";
import { listCartContext } from "./components item/ProviderContextCart";
import { controllerShowCart } from "./ContextCart";

const CartWidget = () => {
    
  const { cartShow, setCartShow } = useContext(controllerShowCart)
  const { listCart } = useContext(listCartContext)

  const showCart = () => {
    setCartShow( ( cartShow === "none") ? "flex" : "none" )
  }

  return (
          <div className="carrito" onClick={showCart}>
        
            <button type="button" class="btn btn-primary position-relative bg-danger border-danger">
              <i class="fa-solid fa-cart-shopping"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-light">
              {listCart.length}
            </span>
            </button>
          </div>
    )
}

export default CartWidget;