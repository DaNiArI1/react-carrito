import Nav from "./components/NavBar.js"

const Header = () => {
  return (
    <header>
      <h1>Sistema de Compras</h1>
      <Nav 
      inHeader={true}
      cosasParaMostrar={["link1", "link2", "link3"]}
      laClase="navbar-header"
      />
    </header>
  )
}

export default Header