import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../../assets/dsclogoh.png";
import "./Navbar.css";
class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <a href="https://www.ctae.ac.in/">
          <img src={logo} alt="dsc-logo" className="dsclogo"></img>
        </a>
        <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
