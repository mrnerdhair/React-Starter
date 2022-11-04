import React from "react";
import logo from "./images/download.png";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} alt="" className="hero--photo" />
      </div>
    );
  }
}

export default Navbar;
