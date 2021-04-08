import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from '../Admin/Admin';
import Login from '../Login/Login';
import Orders from '../Orders/Orders';
import Home from '../Home/Home';
import PrivetRoute from '../PrivetAuth/PrivetRoute';
import Checkout from '../Checkout/Checkout';
export const UserContext = createContext();

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useState({})
    const [signedInUser, setSignedInUser] = useState({})
    const [orderedBook,setOrderedBook]=useState({})
    return (
      <div >
        <UserContext.Provider value={[loggedInUser, setLoggedInUser, signedInUser, setSignedInUser,orderedBook,setOrderedBook]}>
          <Router>
            <div>
  
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
              
              <Link to="/home"><Navbar.Brand href="#home">Solar Books</Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <Link to='/home'><Nav.Link href="#home">Home</Nav.Link></Link>
                  <Link to='/admin'><Nav.Link href="#admin">admin</Nav.Link></Link>
                  <Link to='/orders'><Nav.Link href="#orders">orders</Nav.Link></Link>
                  {
                    loggedInUser.name ? <Link to='/login'><Nav.Link href="#features"> {loggedInUser.name}</Nav.Link></Link> : <Link to="/login"><Button variant="warning">Login</Button></Link>
                  }
                </Nav>
              </Navbar.Collapse>
            </Navbar>
  
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/orders">
                  <Orders />
                </Route>
                <PrivetRoute path='/checkout'>
                    <Checkout></Checkout>
                </PrivetRoute>
                <PrivetRoute path='/admin'>
                <Admin />
                </PrivetRoute>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </UserContext.Provider>
      </div>
    );
  }

export default Header;