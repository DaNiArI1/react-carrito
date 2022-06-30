import Header from "./Header";
import Nav from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { Container } from "react-bootstrap"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
    return (
        <>
            <Header greeting="Hola"
            edad={31}
            usuarios={"Daniel"} />
            <Container fluid>
            <ItemListContainer></ItemListContainer>
            <ItemDetailContainer/>
            </Container>
            <footer>
                <Nav/>
            </footer>
            </>

            
    );
}

export default App