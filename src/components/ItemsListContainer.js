import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Heladeras">
                    {props.itemUno}
                </Link>
            </li>

            <li>
                <Link to="category/Lavarropas">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Cocina">
                    {props.itemTres}
                </Link>
            </li>


        </ul>
    )
}

export default ItemListContainer;