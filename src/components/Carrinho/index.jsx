import React, { useContext } from "react";
import { ContextoCarrinho } from "../../contexts/CarrinhoContext";
import { FaEthereum } from "react-icons/fa";
import { RemoveButton } from "./../Button/index";
import styles from "./styles.module.css";

export const Carrinho = () => {
  const { itensCarrinho, removerItemCarrinho } = useContext(ContextoCarrinho);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Carrinho de Compras</h2>

      <div className={styles.gridContainer}>
        {itensCarrinho.map((item, index) => (
          <div key={index} className={styles.gridItem}>
            <div>
              {item.img && <img src={item.img} alt={item.title} className={styles.image} />}
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.info}>
                <p>{item.title}</p>
                <p>
                  {item.price} <FaEthereum color="#c0c0c0" />
                </p>
              </div>
              <RemoveButton
                title={"Remover"}
                onClick={() => removerItemCarrinho(item.id)}
              />
            </div>
          </div>
        ))}
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
