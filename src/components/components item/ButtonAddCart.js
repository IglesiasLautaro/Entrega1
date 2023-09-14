import { useContext } from "react";
import { listCartContext } from "./ProviderContextCart";

const ButtonAddCart = ( {id} ) => {

    let {addProduct} = useContext(listCartContext)

    return (
        <button id="addCart" onClick={ () => addProduct(id)}>
            <i class="white fa-solid fa-cart-shopping"></i>
        </button>
    )
}

export default ButtonAddCart;