import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./ProdutoEspec.module.css";

const ProdutoEspec = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError("Um erro aconteceu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{Error}</p>;
  if (produto === null) return null;

  return (
    <section className={styles.produto + " animeLeft"}>
      <Head title={produto.nome} />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div>
        <h1 className={styles.titulo}>{produto.nome}</h1>
        <p className={styles.preco}>R$ {produto.preco}</p>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default ProdutoEspec;
