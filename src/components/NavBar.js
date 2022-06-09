import CartWidget from "./CartWidget"

const Nav = ({ inHeader, cosasParaMostrar, laClase }) => {

    return (
      <nav className={laClase}>
        <a href="#">{inHeader ? "link" : "Twitter"}</a>
        <CartWidget></CartWidget>
        <a href="#">{inHeader ? "link" : "instagram"}</a>
        <a href="#">{inHeader ? "link" : "linkedin"}</a>
      </nav>
      
    )
  }
  
  export default Nav