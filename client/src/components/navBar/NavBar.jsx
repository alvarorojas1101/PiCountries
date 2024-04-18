import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../searchBar/SearchBar";

const NavBar = () => {
  // ubicacion actual y funcion de navegacion
  const location = useLocation();
  const navigate = useNavigate();

  const isWelcome = location.pathname === "/";
  const isForm = location.pathname === "/form";
  const isDetailPage = location.pathname.includes("/detail/");

  const handleLogout = () => {
    navigate("/");
  };

  if (isWelcome) {
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
            <button className={styles.btnBar}>Create Activity</button>
          </Link>
        </ul>
        {!isForm && !isDetailPage && <SearchBar />}
        <ul>
          <button className={styles.btnBar} onClick={handleLogout}>
            Out
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
