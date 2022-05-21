import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.6435-9/107900752_112183293901989_1118250393734898886_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nauHvPg5Kh0AX_01Z_r&_nc_ht=scontent.fpat3-3.fna&oh=00_AT-2YSaC0W1CTU_aTCh8T_pKjhOemdSgx07akmUeqo5xTw&oe=628A5430"
              alt="Car Zone"
              style={{
                width: "50px",
                height: "30px",
                border: "2px solid black",
                borderRadius: 10,
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contactus">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutus">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
