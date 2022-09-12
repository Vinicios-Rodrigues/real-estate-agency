import { useState } from "react";
import { dataHome } from "./dataHome";
import { Link, animateScroll as scroll } from "react-scroll";
import style from "./homeStyles.module.scss";

export const Homee = ({ id }) => {
  const [toggle, setToggle] = useState(0);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div id={id} className={style.wrapper}>
      <aside className={style.container}>
        <h1>
          <img src="/images/home/logo.svg" alt="" />
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="home" spy={true} smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="empreendimento" spy={true} smooth={true} duration={500}>
                O EMPREENDIMENTO
              </Link>
            </li>
            <li>
              <Link to="plantas" spy={true} smooth={true} duration={500}>
                PLANTAS
              </Link>
            </li>
            <li>
              <Link to="localização" spy={true} smooth={true} duration={500}>
                LOCALIZAÇÃO
              </Link>
            </li>
            <li>
              <Link to="contato" spy={true} smooth={true} duration={500}>
                CONTATO
              </Link>
            </li>
            <li>
              Politica de <br /> privacidade
            </li>
          </ul>
        </nav>
      </aside>
      <div className={style.containerImg}>
        <img src="/images/home/casa1.svg" />

        <img src="/images/home/frame.svg" alt="" />
      </div>
      <div className={style.containerTitle}>
        <h3>
          Aposte no <br />
          <span>conforto</span> sem <br /> perder a <br />{" "}
          <span>elegância</span>
        </h3>
        <Link to="contato" spy={true} smooth={true} duration={500}>
          <button type="button">
            Marque um visita <img src="images/home/vectorbutton.svg" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};
