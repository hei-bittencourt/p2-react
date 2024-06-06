import React, { createContext, useState } from "react";

export const ContextoCarrinho = createContext();

export const ProvedorCarrinho = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const adicionarItemCarrinho = (item) => {
    setItensCarrinho([...itensAnteriores, item]);
  };

  const removerItemCarrinho = (itemId) => {
    setItensCarrinho(itensAnteriores.filter((item) => item.id !== itemId)
    );
  };

  const alternarCarrinho = () => {
    setCarrinhoAberto(!carrinhoAberto);
  };

  const calcularTotal = () => {
    return itensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)
  }

  return (
    <ContextoCarrinho.Provider
      value={{
        itensCarrinho,
        adicionarItemCarrinho,
        removerItemCarrinho,
        carrinhoAberto,
        alternarCarrinho,
        calcularTotal,
      }}
    >
      {children}
    </ContextoCarrinho.Provider>
  );
};