import React, { useState } from "react";
import Produto from "../Components/Produto/produto";
import { useContext } from "react";
import SoldContext from "../soldContext";

const Caixa = () => {
  const productsList = [
    { name: "Queijo", value: 0 },
    { name: "Chourico", value: 0 },
    { name: "QueijoCourico", value: 0 },
  ];
  const { increaseSold } = useContext(SoldContext);
  const [produtos, setProdutos] = useState(productsList);

  const increaseCounter = (productName) => {
    setProdutos((prevProdutos) =>
      prevProdutos.map((product) =>
        product.name === productName
          ? { ...product, value: product.value + 1 }
          : product
      )
    );
  };
  const decreaseCounter = (productName) => {
    setProdutos((prevProdutos) =>
      prevProdutos.map((product) =>
        product.name === productName && product.value > 0
          ? { ...product, value: product.value - 1 }
          : product
      )
    );
  };

  const finishBuy = () => {
    produtos.map((produtos, id) => increaseSold(id, produtos.value));
    setProdutos(productsList);
  };

  return (
    <div className="h-full w-full">
    <div className="flex flex-col h-full items-center bg-red-50">
      {produtos.map((produto, index) => {
        return (
          <div
            key={index}
            className="bg-cash-b gap-44 flex flex-col justify-center items-center border-8 border-red-800"
          >
            <Produto id={index} name={produto.name} value={produto.value} />
            <div className="flex items-center justify-center  ">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => decreaseCounter(produto.name)}
              > menos </button>
              <button 
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-[50%] py-2.5 text-center mr-2 mb-2"
                onClick={() => increaseCounter(produto.name)}
              > mais </button>
            </div>
          </div>
        );
      })}
    </div>
      <div className="fixed bottom-0 left-0 z-0 w-full h-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => finishBuy()}>Finalizar venda!</div>

    </div>
  );
};

export default Caixa;
