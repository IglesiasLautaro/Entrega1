import { useEffect, useState } from "react";

const AddCantCart = ({initial, stock, id}) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className="addCantCart">
            <span>Quiero: </span>
            <div>
                <button disabled={count <= 1} id="quitar" onClick={decrease}>-</button>
                <span className="cantTxt">{count}</span>
                <button disabled={count >= stock} id="aumentar" onClick={increase}>+</button>
            </div>   
        </div>
    )
}

export default AddCantCart;
