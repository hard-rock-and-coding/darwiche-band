import React from "react";
import logoName from "../assets/darwiche_name_transparent.png"

const Header = () => {
    return (
      <header className="d-flex flex-row p-3">
        <img src={logoName} alt="darwiche" height="45"/>
      </header>
    );
  };
  
  export default Header;