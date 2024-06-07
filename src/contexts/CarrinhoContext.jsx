import React, { createContext, useEffect, useState } from "react";

export const ContextoCarrinho = createContext();

export const ProvedorCarrinho = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  useEffect(() => {
    const carrinhoStorage = localStorage.getItem("itens-carrinho");
    if (carrinhoStorage) {
      setItensCarrinho(JSON.parse(carrinhoStorage));
    }
  }, [])
  
  const adicionarItemCarrinho = (novoItem) => {
    setItensCarrinho((itensAnteriores) => {
      const itemExistente = itensAnteriores.find((item) => item.title === novoItem.title);
      if (itemExistente) {
        const carrinhoAtualizado = itensAnteriores.map((item) =>
          item.title === novoItem.title ? { ...item, quantidade: item.quantidade + 1 } : item
        );
        localStorage.setItem("itens-carrinho", JSON.stringify(carrinhoAtualizado));
        return carrinhoAtualizado
      }
      const novoCarrinho = [...itensAnteriores, { ...novoItem, quantidade: 1 }];
      localStorage.setItem("itens-carrinho", JSON.stringify(novoCarrinho));
      return novoCarrinho
    });
  };

  const removerItemCarrinho = (itemTitle) => {
    const novoCarrinho = itensCarrinho.filter((item) => item.title !== itemTitle)
    setItensCarrinho(novoCarrinho);
    localStorage.setItem("itens-carrinho",JSON.stringify(novoCarrinho) )
  };

  const alternarCarrinho = () => {
    setCarrinhoAberto(!carrinhoAberto);
  };

  const calcularTotal = () => {
    return itensCarrinho.reduce((price, item) => price + item.price * item.quantidade, 0)
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