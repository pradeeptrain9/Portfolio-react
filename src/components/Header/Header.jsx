import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Me from '../../assests/IMG20220803090254.jpg'
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Pradeep Konda</h2>
        <h5 className="text-light">Computer Science '23</h5>
              <CTA />
              <HeaderSocials/>
              
              <div className="me">
                  <img src={Me} alt="me" />
              </div>
              <a href="#Contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
