import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../searchBar/SearchBar";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isForm = location.pathname === "/form";

  if (isHome) {
    return null;
  }

  return (
    <div>
      <nav className={styles.navBar}>
        <Link to="/home">
          <ul className={styles.logo}></ul>
        </Link>
        <ul>
          <Link to="/home">
            <button className={styles.btnBar}>Home</button>
          </Link>
        </ul>
        <ul>
          <Link to="/form">
            <button className={styles.btnBar}>Crear actividad</button>
          </Link>
        </ul>
        {!isForm && <SearchBar />}
        <ul>
          <Link to="/">
            <button className={styles.btnBar}>Salir</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
