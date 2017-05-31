import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './menu.css';

export default class Menu extends Component {
    render() {
        return (
            <Navbar fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        TW Leave
                    </Navbar.Brand>
                    <Navbar.Toggle data-toggle="collapse" data-target="menu" />
                </Navbar.Header>
                <Nav>
                    <LinkContainer to="/">
                        <NavItem eventKey={1}>
                            <Glyphicon glyph="home"/> Home
                        </NavItem>
                    </LinkContainer>
                    <NavDropdown eventKey={2} id="basic-nav-dropdown" title={
                        <span>
                            <Glyphicon glyph="random" />
                            Request
                        </span>
                    } >
                        <LinkContainer to="/request/vacation">
                            <MenuItem eventKey={2.1}>
                            <span>
                                <Glyphicon glyph="plane" />
                                Vacations
                            </span>
                            </MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/request/medical-leave">
                            <MenuItem eventKey={2.2}>
                            <span>
                                <Glyphicon glyph="plus" />
                                Medical Leaves
                            </span>
                            </MenuItem>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={3} id="basic-nav-dropdown" title={
                        <span>
                            <Glyphicon glyph="user" />
                            User Name
                        </span>
                    } >
                        <MenuItem eventKey={3.1}>
                            <span>
                                <Glyphicon glyph="send" />
                                Leaves
                            </span>
                        </MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}