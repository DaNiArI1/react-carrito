import Nav from "./Nav";

const Header = (props) => {

    console.log(props.test)

    return (
        <header>
            <h1>Titulo</h1>
            <Nav />
        </header>
    )
}

export default Header