import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import styles from "./Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;

  return (
    <>
      <div className={styles.title}>
        <h1>Conheça nossos produtos</h1>
        <div className={styles.line}></div>
      </div>
      <section className={styles.produtos + " animeLeft"}>
        <Head title="Início" />
        {produtos.map((produto) => (
          <Link
            className={styles.produto}
            to={`produto/${produto.id}`}
            key={produto.id}
          >
            <div className={styles.card}>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
              <h1 className={styles.nome}>{produto.nome}</h1>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Produtos;
