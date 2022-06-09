import Header from "./Header";
import Nav from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { Container } from "react-bootstrap";

const App = () => {
    return (
        <>
            <Header greeting="Hola"
            edad={31}
            usuarios={"Daniel"} />
            <Container fluid>
            <ItemListContainer></ItemListContainer>
            </Container>
            <footer>
                <Nav/>
            </footer>
            </>

            
    );
}

export default App