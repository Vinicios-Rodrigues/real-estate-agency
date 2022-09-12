import styles from "./location.module.scss";
import { BiTrain, BiStoreAlt } from "react-icons/bi";
import { BsBank2, BsTree } from "react-icons/bs";
import { GiDutchBike } from "react-icons/gi";
import { MdPets } from "react-icons/md";

import { IconContext } from "react-icons";

export const Location = ({ id }) => {
  return (
    <section id={id} className={styles.container}>
      <div>
        <h2>Localização</h2>
        <p>
          Rua Itaperuna, 100 Santa Rosa <br />
          -Pé Pequena <br />
          Niterói - RJ, 24240-070
        </p>

        <ul>
          <IconContext.Provider value={{ className: styles.icon }}>
            <li>
              <GiDutchBike size={25} /> Bicicletário
            </li>
            <li>
              <BsTree size={25} /> Parque
            </li>
            <li>
              <BsBank2 size={25} /> Banco
            </li>

            <li>
              <BiTrain size={25} /> Estação de Metrô
            </li>
            <li>
              <BiStoreAlt size={25} /> Mercado
            </li>
            <li>
              <MdPets size={25} /> Petshop
            </li>
          </IconContext.Provider>
        </ul>
      </div>
      <img
        className={styles.image}
        src="/images/home/location/location.svg"
        alt=""
      />
    </section>
  );
};
