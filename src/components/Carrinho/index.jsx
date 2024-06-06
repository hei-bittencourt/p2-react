import React, { useContext } from "react";
import { ContextoCarrinho } from "../../contexts/CarrinhoContext";
import Modal from "react-modal";
import styles from "./styles.module.css";

export const Carrinho = () => {
  const { itensCarrinho, removerItemCarrinho } = useContext(ContextoCarrinho);
  console.log(itensCarrinho);
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Carrinho de Compras </h2>
      <ul>
        {itensCarrinho.map((item, index) => (
          <li key={index}>
            {item.title} - R$ {item.price.toFixed(2)} x {item.quantidade}
            <button className={styles.removeButton} onClick={() => removerItemCarrinho(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
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
