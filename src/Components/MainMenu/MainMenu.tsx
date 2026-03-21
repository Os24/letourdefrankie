import * as React from "react";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import mainLogo from "../../images/header_logo.svg";
import instagramLogo from "../../../src/images/instagram.svg";
import mobileMenu from "../../../src/images/mobile-menu.png";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./MainMenu.css";

function MainMenu() {
  return (
    <Navbar className="custom-nav" collapseOnSelect expand="lg" variant="light">
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="header-logo" src={mainLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <img className="custom-collapse" src={mobileMenu} alt="ss" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* <NavDropdown title="BREVET GRAVEL SERIES" id="navbarScrollingDropdown">
            <LinkContainer to="/brevet-gravel-series">
              <Nav.Link>Fecha 1</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/fecha-3">
                <NavDropdown.Item href="#action3">Fecha 3</NavDropdown.Item>
              </LinkContainer>
              </NavDropdown> */}
            <LinkContainer to="/ltdf-2026">
              <Nav.Link>LTDF 2026</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/brevet-2025">
              <Nav.Link>BREVET 2025</Nav.Link>
            </LinkContainer> */}
            {/* <LinkContainer to="/MapRoute">
              <Nav.Link>ROUTE</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/Rules">
              <Nav.Link>RULES</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/Brevet">
              <Nav.Link>BREVET</Nav.Link>
            </LinkContainer> */}
            <NavDropdown title="PAST EDITIONS" id="navbarScrollingDropdown">
              <LinkContainer to="/ltdf-2025">
                <Nav.Link>LTDF 2025</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ltdf-2024">
                <Nav.Link>LTDF 2024</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ltdf-2023">
                <NavDropdown.Item href="#action3">LTDF 2023</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/brevet">
                <Nav.Link>BREVET 2023</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/brevet-2025">
                <Nav.Link>BREVET 2025</Nav.Link>
              </LinkContainer>
              {/* <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#pricing">ABOUT US</Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/letourdefrankie/"
              target="blank"
            >
              <img
                className="social-logo"
                src={instagramLogo}
                alt="instagram_letourdefrankie"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainMenu;
