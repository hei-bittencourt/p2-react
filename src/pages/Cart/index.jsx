/* eslint-disable no-unused-vars */
import React, { useContext , useEffect, useState} from "react";
import styles from "./styles.module.css";
import { Header } from "../../components/Header";
import { Carrinho, ModeloCarrinho } from "../../components/Carrinho";
import { Footer } from "./../../components/Footer/index";
import { ContextoCarrinho } from "./../../contexts/CarrinhoContext";
import { FinalyButton } from "../../components/Button";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { itensCarrinho, removerItemCarrinho } = useContext(ContextoCarrinho);
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const itens = itensCarrinho && itensCarrinho.length > 0

  useEffect(() => {
    if (compraFinalizada) {
      alert('Compra Finalizada');
      setCompraFinalizada(false); // Reset the state after alert
    }
  }, [compraFinalizada]);

  const clicarParaFinalizar = () => {
    setCompraFinalizada(true);
  };


  return (
    <div className={styles.containerPrincipal}>
      <Header />
      <section className={styles.body}>
      <div className={styles.catalogo}>
          <Carrinho
            itensCarrinho={itensCarrinho}
            removerItemCarrinho={removerItemCarrinho}
          />
          {itens ? (
            <FinalyButton title={'Finalizar Compra'} onCLick={clicarParaFinalizar} />
          ) : (
              <Link to='/marketplace'>
              <FinalyButton title={'Adicionar ao Carrinho'}/>
              </Link>
              )}
        </div>
            <calcularTotal/>        
      </section>
      <Footer />
    </div>
  );
};
