import Slider from "react-slick";
import { imgCarrousel } from "./Imgcarrousel";

import styles from "./enterprise.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImagePreview } from "./ImagePreview/ImagePreview";
import { useState } from "react";

export const Enterprise = ({ id }) => {
  let [isSameImg, setIsSameImg] = useState();

  // console.log( isSameImg )

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  function handleChangeImg(e) {
    setIsSameImg(e.target.src);
  }

  return (
    <section id={id} className={styles.container}>
      <div className={styles.contentLeft}>
        <div className={styles.contentText}>
          <h2>O empreendimento</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eos
            laborum, doloribus ratione aliquid numquam nemo aut ipsam modi,
            possimus pariatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odit ab molestiae ipsum porro at? Tenetur nobis
            ipsam, repudiandae duu Inventore? Lorem ipsum dolor sit amet
            consectetur repudiandae duu Inventore? Lorem ipsum dolor sit amet
            consectetur
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {imgCarrousel.map((take, id) => (
              <ImagePreview
                onClick={handleChangeImg}
                key={id}
                image={take.img}
              />
            ))}
          </Slider>
        </div>
        <p className={styles.lastP}>(Clique e arraste)</p>
      </div>
      <div className={styles.contentRight}>
        <img
          src={isSameImg == null ? "/images/home/house.svg" : isSameImg}
          alt=""
        />
      </div>
    </section>
  );
};
