import Image from "next/image";
import { useState } from "react";

import styles from "./project.module.scss";

export const Project = ({ id }) => {
  const [buttonClicked, setButtonClicked] = useState({
    first: true,
    second: false,
    third: false,
  });

  const handleOnClick = (order) => {
    const resetImages = {
      first: false,
      second: false,
      third: false,
    };
    setButtonClicked({
      ...resetImages,
      [order]: true,
    });
  };

  return (
    <section id={id} className={styles.container}>
      <div className={styles.containerLeft}>
        {buttonClicked.first && (
          <img
            className={styles.imagem}
            src="/images/home/plantas/planta.svg"
            alt="imagem da projeto com 3 quartos"
          />
        )}
        {buttonClicked.second && (
          <img
            className={styles.imagem}
            src="/images/home/plantas/planta2.svg"
            alt="imagem da projeto com 2 quartos"
          />
        )}
        {buttonClicked.third && (
          <img
            className={styles.imagem}
            src="/images/home/plantas/planta3.svg"
            alt="imagem da projeto da cobertura"
          />
        )}
      </div>
      <aside className={styles.containerRight}>
        <h2> Plantas</h2>
        <div>
          <button
            onClick={() => handleOnClick("first")}
            className={buttonClicked.first ? styles.isActive : null}
          >
            3 Quartos
          </button>
          <button
            onClick={() => handleOnClick("second")}
            className={buttonClicked.second ? styles.isActive : null}
          >
            2 Quartos
          </button>
          <button
            onClick={() => handleOnClick("third")}
            className={buttonClicked.third ? styles.isActive : null}
          >
            Cobertura
          </button>
          <img src="/images/home/plantas/frame.svg" alt="" />
        </div>
      </aside>
    </section>
  );
};
