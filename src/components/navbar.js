import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {

    const links = [];

    props.links.forEach((e, i, arr) => {
        links.push(<Nav.Link href={e}>{props.buttons[i]}</Nav.Link>);
    });

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href={props.home_page}>
                    <h3 style={{fontStyle:"italic", fontFamily:"New Century Schoolbook, TeX Gyre Schola, serif"}}>
                        {props.title}
                    </h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {links}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



export default NavBar;