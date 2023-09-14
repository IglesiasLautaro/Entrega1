import { useContext } from 'react';
import '../styles/ItemCart.css';
import { listCartContext } from './components item/ProviderContextCart';

const ItemCart = ({id, title, price, quantity, image}) => {
    
    const { remove } = useContext(listCartContext)
    
    return (
        <div className="itemCart">
            

                <div className="description-cantidad">
                    <span className="title">{title}</span>
                    <span className="quantity"> {`cantidad: ${quantity}`} </span>
                </div>

                <div className="price">
                    <span className="subtotal">subtotal</span>
                    <span className="price">${quantity * price}</span>
                </div>

                <div className="img">
                    <img src={ `/img/${image}` }alt="#"></img>            
                </div>

                <div className="delete">
                    <button onClick={() => remove(id)}>
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
        </div>
    )
}

export default ItemCart;