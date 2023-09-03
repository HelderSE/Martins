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

  const finishBuy = () => {
    produtos.map((produtos, id) => increaseSold(id, produtos.value));
    setProdutos(productsList);
  };

  return (
    <div className="flex flex-col bg-red-50 h-[100vh] ">
      {produtos.map((produto, index) => {
        return (
          <div
            key={index}
            onClick={() => increaseCounter(produto.name)}
            className="bg-blue-300 h-[30%] m-5 flex flex-col justify-center items-center"
          >
            <Produto id={index} name={produto.name} value={produto.value} />
          </div>
        );
      })}
      <div onClick={() => finishBuy()}>Finalizar venda!</div>
    </div>
  );
};

export default Caixa;
