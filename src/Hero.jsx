import React from "react";
// import img1 from "./images/Kollmorgen.png";

class Hero extends React.Component {
  render() {
    return (
      <div className="overlay" style={{ background: "url(${img1})" }}></div>
      // <section className="hero">
      //   <img src={img1} alt="" />
      // </section>
    );
  }
}

export default Hero;
