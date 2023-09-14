const Image = (props) => {
    return (
        <div className="cardImg">
            <img src={ `/img/${props.imagen}` }alt="#"></img>
        </div>
    )
}
export default Image;