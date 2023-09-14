const AddCantCart = () => {
    
    return (
        <div className="addCantCart">
            <span>Quiero: </span>
            <div>
                <button id="quitar">-</button>
                <span className="cantTxt">0</span>
                <button id="aumentar">+</button>
            </div>
        </div>
    )
}

export default AddCantCart;