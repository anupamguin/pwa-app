import React from "react";
import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Navbar bg="dark" variant="dark">
    //       <Container>
    //         <Navbar.Brand>Anupam</Navbar.Brand>
    //         <Nav className="me-auto">
    //           <NavLink to="/" className="btn btn-light nav-item">
    //             Home
    //           </NavLink>
    //           <NavLink to="/about" className="btn btn-light ml-2">
    //             About
    //           </NavLink>
    //           <NavLink to="/users" className="btn btn-light ml-2">
    //             Users
    //           </NavLink>
    //         </Nav>
    //       </Container>
    //     </Navbar>

    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route path="/about" component={About} />
    //       <Route path="/users" component={Users} />
    //     </Switch>
    //   </BrowserRouter>
    // </div>

    <div className="App container-fluid">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="text-info h3">Anupam Guin</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              {/* <Nav.Link>Home</Nav.Link>
              <Nav.Link>Link</Nav.Link>

              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
              <NavLink to="/" className="sty">
                Home
              </NavLink>
              <NavLink to="/about" className="sty">
                About
              </NavLink>
              <NavLink to="/users" className="sty">
                Users
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
