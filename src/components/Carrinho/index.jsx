import React, { useContext } from "react";
import { ContextoCarrinho } from "../../contexts/CarrinhoContext";
import { FaEthereum } from "react-icons/fa";
// import { RemoveButton, FinalyButton } from "./../Button/index";
import styles from "./styles.module.css";


export const Carrinho = () => {
  const { itensCarrinho } =
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
    <div >
      {/* <div className={styles.catalogo}> */}
        {/* {itensCarrinho.map((item, index) => (
            <Card key={index} cardProps={item} />
        ))} */}
        {/* <div className={styles.totalContainer}> */}
          <p className={styles.total}>
            Total: {calcularTotalSeguro().toFixed(2)} <FaEthereum  />
          </p>
        {/* </div> */}
      {/* </div> */}
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
