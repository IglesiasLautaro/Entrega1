import Image from "./Image";
import Description from "./Description";
import "../../styles/detailsItem.css";
import AddCantCart from "./AddCantCart";
import { useEffect } from "react";
import fetchSimulation from "../../utils/fetchSimulation";
import { useParams } from "react-router-dom";
import { useState } from "react";
import productos from "../../utils/products";

const DetailsItem = (props) => {
    const [ datos, setDatos] = useState( [] );
    const { idItem } = useParams();
    
    useEffect(() => {
        if(idItem == undefined){
            fetchSimulation(productos, 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else{
            fetchSimulation(productos.filter( flt => flt.id == idItem), 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }
    }, [idItem])

    
    return(
        <div className="detailsItem">
           {
                datos.map( item => (
                    <>
                        <div className="containerLeft">
                            <Image 
                                imagen={datos[0].imageProduct.firstImage}
                            />
                        </div>

                        <div className="containerRight">
                            <Description 
                                title={datos[0].title}
                                parrafo={datos[0].description}
                                cantidad={datos[0].stock}
                                precio={datos[0].price}
                            />

                            <div className="buttons">
                                <AddCantCart 
                                    
                                />
                            
                            </div>
                        </div>
                    
                    </>
                ))
           }

        </div>
    )
}

export default DetailsItem;
