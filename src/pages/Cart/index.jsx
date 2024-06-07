/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { Carrinho, ModeloCarrinho } from "../../components/Carrinho";
import { Footer } from "./../../components/Footer/index";
import { ContextoCarrinho } from "./../../contexts/CarrinhoContext";

export const Cart = () => {
  const { itensCarrinho, removerItemCarrinho } = useContext(ContextoCarrinho);

  return (
    <div className={styles.containerPrincipal}>
      <Header />

      <section className={styles.body}>
        <div className={styles.catalogo}>
          <Carrinho
            itensCarrinho={itensCarrinho}
            removerItemCarrinho={removerItemCarrinho}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};
