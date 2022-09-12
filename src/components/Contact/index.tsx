import styles from "./contact.module.scss";

export const Contact = ({ id }) => {
  return (
    <section id={id} className={styles.container}>
      <img src="/images/home/contact/frame.svg" alt="" />

      <form className={styles.containerForm}>
        <h3>
          Ficou <br /> Interessado ?
        </h3>
        <p>
          Preencha o formulário abaixo e um de <br />
          nossos consultores entrará em contato
        </p>
        <input type="text" placeholder="Como devemos te chamar ?" required />
        <input
          type="number"
          name=""
          id=""
          maxLength={11}
          placeholder="Seu Telefone"
          required
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Seu Melhor E-mail"
          required
        />
        <div className={styles.contentButton}>
          <input type="checkbox" name="" id="" />
          <span>
            Li e aceito os termos <br /> de uso dos dados conforme <br />{" "}
            indicado na Política de Privacidade.
          </span>

          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
};
