import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/index";
import { ContextoCarrinho } from "../../contexts/CarrinhoContext";
import { FinalyButton } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { FaEthereum } from "react-icons/fa";

import { toast } from "react-toastify";

export const Carrinho = () => {
  const { itensCarrinho, limpaCarrinho, calcularTotal } =
    useContext(ContextoCarrinho);
  const [compraFinalizada, setCompraFinalizada] = useState(false);
  const navigate = useNavigate();
  const itens = itensCarrinho && itensCarrinho.length > 0;

  useEffect(() => {
    if (compraFinalizada) {
      setCompraFinalizada(false);
    }
  }, [compraFinalizada]);

  const clicarParaFinalizar = () => {
    setCompraFinalizada(true);
    toast.success("Compra realizada com sucesso!");
    limpaCarrinho();
    navigate("/marketplace");
  };

  return (
    <div className={styles.containerPrincipal}>
      <Header />
      <section className={styles.body}>
        <h2>Carrinho de Compras</h2>
        <div className={styles.containerInterno}>
          <p className={styles.total}>
            <span>Total:</span> {calcularTotal().toFixed(2)}{" "}
            <FaEthereum color="#c0c0c0" />
          </p>
          {itens ? (
            <FinalyButton
              title={"Finalizar Compra"}
              onClick={clicarParaFinalizar}
            />
          ) : (
            <Link to="/marketplace">
              <FinalyButton title={"Adicionar ao Carrinho"} />
            </Link>
          )}
        </div>
        <div className={styles.catalogo}>
          {itensCarrinho.map((item, index) => (
            <Card key={index} cardProps={item} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};
