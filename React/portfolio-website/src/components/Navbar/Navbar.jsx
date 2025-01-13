import React, { useState } from "react";
import style from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { assets } from "../../../assets/nav/";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={style.navbar}>
      <a className={style.title} href="/">
        Portfolio
      </a>
      <div className={style.menu}>
        <img
          className={style.menuBtn}
          src={menuOpen ? assets.closeIcon : assets.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
          alt="menu-btn"
        />
        <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
