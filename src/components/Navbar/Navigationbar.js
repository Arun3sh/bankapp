import "./Navigationbar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { authContext } from "../../App";
import { useHistory } from "react-router-dom";

function Navigationbar() {
  const { login, isAdmin } = useContext(authContext);
  const cursorstyle = { cursor: "pointer" };
  const history = useHistory();

  return (
    <Navbar bg="light" expand="sm">
      <Container className="navbar-container">
        {/* Brand Name */}
        <Navbar.Brand href="#home">
          <Link className="nav-link" to="/">
            BankApp
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="hamburger-menu" id="basic-navbar-nav">
          <Nav>
            {!isAdmin && (
              <HashLink className="nav-link" to="/#about">
                About
              </HashLink>
            )}

            <HashLink className="nav-link" to="/#">
              Solutions
            </HashLink>

            {isAdmin && (
              <Link className="nav-link" to="/add-products">
                Add Product
              </Link>
            )}
          </Nav>

          {!login && (
            <Link className="login-link" to="/login">
              Login
            </Link>
          )}

          {login && (
            <Link to="#" className="logout-link">
              Logout
            </Link>
          )}

          {!login && (
            <Button
              className="signup-btn"
              variant="outlined"
              onClick={() => history.push("/create-account")}
            >
              Sign up
            </Button>
          )}

          {/* userlist for admin */}
          {isAdmin && (
            <Link className="nav-link" to="/users">
              View Users
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
