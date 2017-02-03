
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <nav className = "navbar navbar-inverse" role = "navigation">
        
          <div className = "navbar-header">                        
              <a className = "navbar-brand" href = "#">Aple ITunes</a>
          </div>
          
          <div>
              <ul className = "nav navbar-nav">                
                <li><a href = "#">iPhone</a></li>
                <li><a href = "#">iPad</a></li> 
                <li><a href = "#">iPod</a></li>             
              </ul>
          </div>
          
        </nav>
      
    );
  }
}