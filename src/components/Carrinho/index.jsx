import React, { useContext } from "react";
import { ContextoCarrinho } from "../../contexts/CarrinhoContext";
import Modal from "react-modal";


export const Produto = ({ produto }) => {
  const { adicionarItemCarrinho  } = useContext(ContextoCarrinho);

  return (
    <div>
      <h2>{produto.title}</h2>
      <p>{produto.price}</p>
      <button onClick={() => adicionarItemCarrinho (produto)}>
        Adiciornar ao Carrinho
      </button>
    </div>
  );
};
export const Carrinho = () => {
  const { itensCarrinho, removerItemCarrinho } = useContext(ContextoCarrinho);

  return (
    <div>
      <h2>Carrinho</h2>
      {itensCarrinho.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => removerItemCarrinho(item.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
};

export const ModeloCarrinho = () => {
  const { carrinhoAberto, toggalternarCarrinho leCart } = useContext(ContextoCarrinho);
  return (
    <Modal
      isOpen={carrinhoAberto}
      onRequestClose={alternarCarrinho}
      contentLabel="Modelo do Carrinho"
    >
      <Carrinho />
      <button onClick={alternarCarrinho}>Fechar</button>
    </Modal>
  );
};
