/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ContextoCarrinho = createContext();

export const ProvedorCarrinho = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const adicionarItemCarrinho = (item) => {
    setItensCarrinho((itensAnteriores) => [...itensAnteriores, item]);
  };

  const removerItemCarrinho = (itemId) => {
    setItensCarrinho((itensAnteriores) =>
      itensAnteriores.filter((item) => item.id !== itemId)
    );
  };

  const alternarCarrinho = () => {
    setCarrinhoAberto(!carrinhoAberto);
  };

  return (
    <ContextoCarrinho.Provider
      value={{
        itensCarrinho,
        adicionarItemCarrinho,
        removerItemCarrinho,
        carrinhoAberto,
        alternarCarrinho,
      }}
    >
      {children}
    </ContextoCarrinho.Provider>
  );
};
