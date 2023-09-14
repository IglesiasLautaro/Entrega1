import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import {useState, useEffect} from "react";
import "../../styles/containerCardItems.css";
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/ClipLoader";



const ContainerCardItems = () => {
    const [ datos, setDatos] = useState( [] );
    const { idCategory } = useParams();
    
    useEffect(() => {

        setDatos( [] );

        if(idCategory == undefined){
            fetchSimulation(productos, 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else {
            fetchSimulation(productos.filter(filter => filter.type == idCategory), 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }
        
    }, [idCategory])

    return (
        <div className="containerCardItems">
            {
                (datos.length === 0 ) ? <div className="containerSpinner"> <MoonLoader color="red" /> </div>
                : datos.map( product => (
                    <CardItem 
                        id={product.id}
                        imagen= {product.imageProduct.firstImage}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price}
                    />  
                ))
            }
        </div>
    )
}

export default ContainerCardItems;