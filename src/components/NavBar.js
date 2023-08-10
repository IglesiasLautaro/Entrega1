import CartWidget from "./CartWidget";


const Navbar = () => {
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg bg-warning">
  
  <div class="container-fluid">
    
        <a class="navbar-brand" href="#">Whirlpool<b>Store</b></a>
    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Producto</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Contacto</a>
                </li>
            </ul>
      
      <form class="d-flex" role="search">
            
            <button class="btn btn-outline-success border-dark text-dark bg-white" type="submit">Buscar</button>
      
      </form>
    
        <CartWidget></CartWidget>
            
            </div>
    
        </div>
    
        </nav>
        
    </div>
    
    )
}

export default Navbar;