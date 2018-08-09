import React,{Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
    } from 'reactstrap';


    class AppNavBar extends Component{
        state = {
            isOpen: false
          };
        
          toggle = () => {
            this.setState({
              isOpen: !this.state.isOpen
            });
          };
        
    render(){
        return(
            <Navbar color="dark " dark expand="sm" className="mb-5">
        <Container>
            <NavbarBrand href="/">All Students</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/packiasheelav">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        )
    }
    }

    export default AppNavBar;