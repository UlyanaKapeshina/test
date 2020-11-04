import React, { useState } from "react";
import Menu from "../menu/Menu";
import "./Header.scss";

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const ref = React.createRef();

  const scrollClickHandler = () => {
    const top = ref.current.clientHeight;
    window.scrollTo({
      behavior: "smooth",
      top: top,
    });
  };
  
  const menuClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" ref={ref}>
      <div className="header_inner">
        <Menu isHeader={true} isOpen={isOpen} />
        <button className="header_nav-button" onClick={menuClickHandler}>
          ∞ MENU
        </button>
        <p className="header_scroll" onClick={scrollClickHandler}>
          scroll down to see more
        </p>
      </div>
    </header>
  );
}

export default Header;
