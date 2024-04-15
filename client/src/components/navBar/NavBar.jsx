import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../searchBar/SearchBar";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isForm = location.pathname === "/form";

  const handleLogout = () => {
    navigate("/"); // Redirige al usuario a la ruta raíz
  };

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
          <button className={styles.btnBar} onClick={handleLogout}>
            Salir
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
