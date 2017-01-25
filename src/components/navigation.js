
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
                <li className = "active"><a href = "#">iOS</a></li>
                <li><a href = "#">SVN</a></li>
              
                <li className = "dropdown">
                    <a href = "#" className = "dropdown-toggle" data-toggle = "dropdown">
                      Java 
                      <b className = "caret"></b>
                    </a>
                    
                    <ul className = "dropdown-menu">
                      <li><a href = "#">jmeter</a></li>
                      <li><a href = "#">EJB</a></li>
                      <li><a href = "#">Jasper Report</a></li>
                      
                      <li className = "divider"></li>
                      <li><a href = "#">Separated link</a></li>
                      
                      <li className = "divider"></li>
                      <li><a href = "#">One more separated link</a></li>
                    </ul>
                    
                </li>
              
              </ul>
          </div>
          
        </nav>
      
    );
  }
}