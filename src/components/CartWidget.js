import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
    return (
          <div className="carrito">
        
            <button type="button" class="btn btn-primary position-relative bg-danger border-danger">
              <i class="fa-solid fa-cart-shopping"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-light">
              1
            </span>
            </button>
          </div>
    )
}

export default CartWidget;