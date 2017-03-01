import React from 'react';
import {render} from 'react-dom';
import {Button, Grid, Row, Col, Thumbnail, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Router, Route, Link, browserHistory } from 'react-router';

class Header extends React.Component {
   render() {
      return (
         <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Collapse>
                  <Nav className="navbar navbar-inverse navbar-fixed-top">  
                    <NavItem><Link to="/">Get Recent</Link></NavItem>
                    <NavItem><Link to="/get-photos">Get Photos</Link></NavItem>
                    <NavItem><Link to="/get-contact-photos">Get Contact Public Photos</Link></NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
         </div>
      );
   }
}

export default Header;