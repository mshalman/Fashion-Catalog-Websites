import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
    <div>
        <Navbar variant="light">
            <Container>
                <Navbar.Brand>VANS COLLECTIONS</Navbar.Brand>
                <Nav>
                <Nav.Link href="#shoes">Shoes</Nav.Link>
                <Nav.Link href="#tshirt">Tshirt</Nav.Link>
                <Nav.Link href="#jacket">Jacket</Nav.Link>
                <Nav.Link href="#hat">Hat</Nav.Link>
                <Nav.Link href="#bag">Bag</Nav.Link>
                <Nav.Link href="#slappers">Slappers</Nav.Link>
                
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavigationBar