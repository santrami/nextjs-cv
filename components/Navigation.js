import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faDiagramProject,faAd } from '@fortawesome/free-solid-svg-icons';

const navStyle={    
    fontSize: "1.5rem",
    display: "flex",
    justifyContent:"center",
    
}

const navBorder={
    borderRadius: "0 0 20px 20px",    
}

const Navigation = () => (
    <Navbar bg="dark"  expand="lg" variant="dark" style={navBorder}>
        <Container>
            <Link href="/" passHref>
                <Navbar.Brand>My CV</Navbar.Brand>                            
            </Link>  
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto pe-5">
                    <Icon icon={faDiagramProject} style={{color:"white",alignSelf:"center", fontSize:"0.8em"}} transform="shrink-1"/>
                    <Link href="/github" passHref>
                        <Nav.Link>Projects</Nav.Link>
                    </Link>
                    <Link href="/blog" passHref>
                        <Nav.Link>Blog</Nav.Link>
                    </Link>
                    <Link href="/contact" passHref>
                        <Nav.Link>Contact</Nav.Link>                    
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Navigation