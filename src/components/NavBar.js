import CartWidget from "./CartWidget"

const Nav = ({ inHeader, cosasParaMostrar, laClase }) => {

    return (
      <nav className={laClase}>
        <a href="#">{inHeader ? "Inicio " : "Twitter"}</a>
        <a href="#">{inHeader ? "Compras " : "instagram"}</a>
        <a href="#">{inHeader ? "Nuestra Empresa " : "linkedin"}</a>
        <CartWidget></CartWidget>
      </nav>
      
    )
  }
  
  export default Nav