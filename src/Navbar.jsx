import React from "react";
// import '../App.css';
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import homeFill from "./svg/house-fill.svg";
import homeDoor from "./svg/house-door.svg";
import house2 from "./svg/house2.svg";
import "./styles/Navbar.css";

function NavbarMenu() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const close = () => setIsExpanded(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        expanded={isExpanded}
      >
        <Navbar.Brand></Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setIsExpanded((old) => !old)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">

          {/* Home Ok - icon awesome */}
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} exact to="/" onClick={close} className="home">
              <i
                className="fas fa-home-lg-alt"
                style={{ fontSize: "22px" }}
              ></i>
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} onClick={close} to="/pricing">
              {" "}
              Pricing{" "}
            </Nav.Link>
            <Nav.Link as={NavLink} onClick={close} to="/features">
              {" "}
              Features{" "}
            </Nav.Link>
            <Nav.Link as={NavLink} onClick={close} to="/MoreDeets">
              {" "}
              More deets{" "}
            </Nav.Link>
            <Nav.Link as={NavLink} onClick={close} to="/Dankmenu">
              {" "}
              Dank memes{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarMenu;
