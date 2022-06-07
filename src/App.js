import Header from "./Header";
import Nav from "./components/NavBar";

const App = () => {
    return (
        <>
            <Header greeting="Hola"
            edad={31}
            usuarios={"Daniel"} />
            <footer>
                <Nav/>
            </footer>
            </>
    );
}

export default App