import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
  } from "react-bootstrap"
import Home from "../../containers/home"
import About from "../../containers/about"
import Contact from "../../containers/contact"
import Portfolio from "../../containers/portfolio"

class Header extends React.Component{

render(){
    return(
        <header className="header">
            <div className="header-body">
                <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="home">Ryan Tinsley</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                        <NavDropdown title="Additional" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    </Switch>
                </div>
                </Router>
            </div>
        </header>
    );
}

}

export default Header