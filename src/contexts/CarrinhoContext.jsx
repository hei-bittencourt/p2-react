import React, { createContext, useEffect, useState } from "react";

export const ContextoCarrinho = createContext();

export const ProvedorCarrinho = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState([{}]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  useEffect(() => {
    const carrinhoStorage = localStorage.getItem("itens-carrinho");
    if (carrinhoStorage) {
      setItensCarrinho(JSON.parse(carrinhoStorage));
    }
  },[])

  const adicionarItemCarrinho = (novoItem) => {
    setItensCarrinho((itensAnteriores) => {
      const itemExistente = itensAnteriores.find((item) => item.id === novoItem.id);
      if (itemExistente) {
        return itensAnteriores.map((item) =>
          item.id === novoItem.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      localStorage.setItem("itens-carrinho",JSON.stringify([...itensAnteriores, novoItem]) )
      return [...itensAnteriores, novoItem];
    });
  };

  const removerItemCarrinho = (itemId) => {
    const novoCarrinho = itensCarrinho.filter((item) => item.id !== itemId)
    setItensCarrinho(novoCarrinho);
    localStorage.setItem("itens-carrinho",JSON.stringify(novoCarrinho) )
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