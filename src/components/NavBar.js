import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";


const Navbar = () => {
    return (
        <ContextCart>
            <header>
                    <div class="container-fluid">
                        <Link className="navbar-brand fs ps-5" href="#" to="/">
                            
                            Whirlpool<b>Store</b>
                            
                        </Link>
                    </div>

                        <ItemListContainer 
                            itemUno= "Heladeras"
                            itemDos= "Lavarropas"
                            itemTres= "Cocina"
                        />
                   
                        <CartWidget/>

                        <ContainerCart />
            </header>
        </ContextCart>
    )  
}

export default Navbar;