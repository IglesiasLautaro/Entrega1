import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
       
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
            </header>
    )  
}

export default Navbar;