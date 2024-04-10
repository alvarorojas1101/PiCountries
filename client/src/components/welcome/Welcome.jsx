import React from "react";
import styles from "./Welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={styles.Welcome}>
      <h1 className={styles.textWelcome}>
        ¡Bienvenido a la aventura de descubrir los países del mundo!
      </h1>
      <h2>
        ¡Explora el fascinante universo de los países con nuestra completa base
        de datos de 250 naciones!
      </h2>
      <div className={styles.buttonWelcome}>
        <Link to="/countries">
          <button className={styles.btn}>Ingresar</button>
        </Link>
      </div>
      <h3>
        Descubre y sumérgete en cada rincón del planeta con nuestras
        actividades.
      </h3>
    </div>
  );
}

export default Welcome;
