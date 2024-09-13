import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" style={{"color": "white"}}>
    <Container>
      <Navbar.Brand>Che Blankenship</Navbar.Brand>
      <Nav>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/projects" passHref>
          <Nav.Link>Projects</Nav.Link>
        </Link>
        <Link href="/blog" passHref>
          <Nav.Link>Blog</Nav.Link>
        </Link>
        {/* <Link href="/resume" passHref>
          <Nav.Link>Resume</Nav.Link>
        </Link> */}
      </Nav>
    </Container>
  </Navbar>
)

export default NavigationBar;