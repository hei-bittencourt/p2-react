import React, { useContext } from "react";
import { ContextoCarrinho } from "../../contexts/CarrinhoContext";
import { FaEthereum } from "react-icons/fa";
import { RemoveButton, FinalyButton } from "./../Button/index";
import styles from "./styles.module.css";
import { Card } from "../../components/Card";

export const Carrinho = () => {
  const { itensCarrinho, removerItemCarrinho, calcularTotal } =
    useContext(ContextoCarrinho);

    const calcularTotalSeguro = () => {
      return itensCarrinho.reduce((total, item) => {
        const price = parseFloat(item.price);
        const quantidade = parseInt(item.quantidade, 10);
        if (isNaN(price) || isNaN(quantidade)) {
          return total;
        }
        return total + price * quantidade;
      }, 0);
    };
  
  return (
    <div className={styles.container}>
      <div className={styles.catalogo}>
        {itensCarrinho.map((item, index) => (
            <Card key={index} cardProps={item} />
        ))}
        <div className={styles.totalContainer}>
          <h3 className={styles.total}>
            Total: {calcularTotalSeguro().toFixed(3)} <FaEthereum color="#c0c0c0" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export const ModeloCarrinho = () => {
  const { carrinhoAberto, alternarCarrinho } = useContext(ContextoCarrinho);
  return (
    <Modal
      isOpen={carrinhoAberto}
      onRequestClose={alternarCarrinho}
      contentLabel="Modelo do Carrinho"
    >
      <Carrinho
        itensCarrinho={itensCarrinho}
        removerItemCarrinho={removerItemCarrinho}
      />
      <button onClick={alternarCarrinho}>Fechar</button>
    </Modal>
  );
};
