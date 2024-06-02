/**
 * File Name: Navbar.jsx
 * Student's Name: Hoang Giang Dang
 * Student ID: 301255147
 * Date: Jun 1,2024
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a href="/">
          <img
            src={getImageUrl("hero/logo.png")}
            alt="logo"
            className={styles.logo}
          />
        </a>
      </div>
      {/* <a className={styles.title} href="/">
        Portfolio
      </a> */}
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a> <Link to="/">Home</Link></a>
          </li>
          <li>
            <a> <Link to="/AboutMePage">About Me</Link></a>
          </li>
          <li>
          <a> <Link to="/ProjectPage">Projects</Link></a>
          </li>
          <li>
          <a> <Link to="/ServicesPage">Services</Link></a>
          </li>
          <li>
          <a> <Link to="/ContactPage">Contact</Link></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
