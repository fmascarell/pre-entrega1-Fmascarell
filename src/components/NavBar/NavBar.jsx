import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

function NavBar(){
    return (
     
     <nav className="navbar navbar-expand-lg fixed-top">
     
     <div className="container-fluid">
         <a className="navbar-brand" href="/"><Logo /></a>
         
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">Inicio</a>
             </li>
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">Productos</a>
             </li>
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">Contacto</a>
             </li>
         </ul>
         <form class="d-flex mt-3" role="search">          
         <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>          
         <button class="btn btn-outline-success" type="submit">Buscar</button>        
         </form>
         </div>
     </div>
     <CartWidget />
     </nav>

    )
  }
  
  export default NavBar
