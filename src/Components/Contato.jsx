import React from "react";
import styles from "./Contato.module.css";
import foto from "../assets/img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <>
      <Head title="Contato" />
      <section className={styles.contato + " animeLeft"}>
        <img src={foto} alt="Máquina de escrever" />
        <div>
          <h1>Meus contatos 🤞</h1>
          <ul className={styles.dados}>
            <li>
              <a href="https://www.linkedin.com/in/brayanmelo/" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/brayanmelo" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contato;
