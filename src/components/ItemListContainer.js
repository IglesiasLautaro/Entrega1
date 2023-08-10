import "./ItemListContainer.css";

const ItemListContainer = (props) => {
    return (
        <div className="container">
            <h1>{props.title}</h1>
        </div>
    )
}


export default ItemListContainer;