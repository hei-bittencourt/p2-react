import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ContextoCarrinho = createContext();

export const ProvedorCarrinho = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  useEffect(() => {
    const carrinhoStorage = localStorage.getItem("itens-carrinho");
    if (carrinhoStorage) {
      setItensCarrinho(JSON.parse(carrinhoStorage));
    }
  }, []);

  const adicionarItemCarrinho = (novoItem) => {
    setItensCarrinho((itensAnteriores) => {
      const itemExistente = itensAnteriores.find(
        (item) => item.title === novoItem.title
      );
      if (itemExistente) {
        const carrinhoAtualizado = itensAnteriores.map((item) =>
          item.title === novoItem.title
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
        localStorage.setItem(
          "itens-carrinho",
          JSON.stringify(carrinhoAtualizado)
        );
        return carrinhoAtualizado;
      }
      const novoCarrinho = [...itensAnteriores, { ...novoItem, quantidade: 1 }];
      localStorage.setItem("itens-carrinho", JSON.stringify(novoCarrinho));
      return novoCarrinho;
    });
  };

  const removerItemCarrinho = (itemTitle) => {
    const novoCarrinho = itensCarrinho.filter(
      (item) => item.title !== itemTitle
    );
    setItensCarrinho(novoCarrinho);
    localStorage.setItem("itens-carrinho", JSON.stringify(novoCarrinho));
    toast.success("Item removido do carrinho.");
  };

  const limpaCarrinho = () => {
    setItensCarrinho([]);
  };

  const alternarCarrinho = () => {
    setCarrinhoAberto(!carrinhoAberto);
  };

  const calcularTotal = () => {
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
    <ContextoCarrinho.Provider
      value={{
        itensCarrinho,
        adicionarItemCarrinho,
        removerItemCarrinho,
        carrinhoAberto,
        alternarCarrinho,
        calcularTotal,
        limpaCarrinho,
      }}
    >
      {children}
    </ContextoCarrinho.Provider>
  );
};
