const AddCantCart = (props) => {
    return (
        <div className="addCantCart">
            <span>Quiero: </span>
            <div>
                <button id="quitar">-</button>
                <span className="cantTxt"> {props.txt} </span>
                <button id="aumentar">+</button>
            </div>
        </div>
    )
}

export default AddCantCart;