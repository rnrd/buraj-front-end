import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrain } from "react-icons/fa";
import "../css/Navibar.css";
import { withRouter } from "react-router-dom";

function Navibar(props) {
  //this part is for toggle button of navbar:
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  console.log(props)

  return (
    <div className="navbar-div" fixed="top">
      <Navbar className="nav-bar" light expand="md">
        <NavbarBrand className="navbar-icon" href="/">
          <FaTrain color="white" size="2em" />
        </NavbarBrand>
        <NavbarToggler className="navbar-toggler" onClick={toggle} />
        <Collapse className="navbar-toggler-collapse" isOpen={isOpen} navbar>
          <Nav className="nav mr-auto" navbar>
            <NavItem className="nav-items">
              <NavLink
                className="nav-links"
                href="/"
                onClick={(e) => {
                  //e.preventDefault();
                  //props.history.push("/");
                }}
              >
                Anasayfa
              </NavLink>
            </NavItem>
            <NavItem className="nav-items">
              <NavLink
                className="nav-links"
                href="/basitkurp"
                onClick={(e) => {
                  //e.preventDefault();
                  //props.history.push("/basitkurp");
                }}
              >
                Basit Kurp
              </NavLink>
            </NavItem>
            <NavItem className="nav-items">
              <NavLink
                className="nav-links"
                href="/parabolsuzkurp"
                onClick={(e) => {
                  //e.preventDefault();
                  //props.history.push("/prediction");
                }}
              >
                Parabolsuz Kurp
              </NavLink>
            </NavItem>
            <NavItem className="nav-items">
              <NavLink
                className="nav-links"
                href="/kisadevelopmanlikurp"
                onClick={(e) => {
                  //e.preventDefault();
                  //props.history.push("/kisadevelopmanlikurp");
                }}
              >
                Kısa Developmanlı Kurp
              </NavLink>
            </NavItem>
            <NavItem className="nav-items">
              <NavLink
                className="nav-links"
                href="/skurp"
                onClick={(e) => {
                  //e.preventDefault();
                  //props.history.push("/skurp");
                }}
              >
                S Kurp
              </NavLink>
            </NavItem>
            <NavItem className="nav-items">
              <NavLink
                className="nav-links"
                href="/sepetkurp"
                onClick={(e) => {
                  //e.preventDefault();
                  //props.history.push("/sepetkurp");
                }}
              >
                Sepet Kurp
              </NavLink>
            </NavItem>
            <NavItem className="nav-items">
              <NavLink
                className="nav-links  nav-links-hover"
                href="/calismaprensibi"
                onClick={(e) => {
                  //e.preventDefault();
                  //props.history.push("/signup");
                }}
              >
                Çalışma Prensibi
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarText className="nav-text">
            TCDD
        </NavbarText>
      </Navbar>
    </div>
  );
}

//Because of Navi component is not in react-router switch:
//we should use withRouter high order function in order to implement routing without page refresh
export default withRouter(Navibar);
