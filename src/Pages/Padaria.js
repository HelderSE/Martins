import Produto from "../Components/Produto/produto";
import produtos from "../Produtos.json";
import { useContext } from "react";
import SoldContext from "../soldContext";

const Padaria = () => {
  const { items, decreaseSold } = useContext(SoldContext);
  console.log(items);
  return (
    <div className="flex flex-col bg-red-50 h-[100vh] ">
      {produtos.map((Name, index) => {
        return (
          <div className="bg-red-300 justify-center h-[34%] flex flex-col">
            <Produto id={index} name={Name} value={items[index]} />
            <div className="flex  items-center gap-9 justify-center">
              <button
                className=" p-3 border border-blue-500 px-5 w-[50%]"
                onClick={() => decreaseSold(index, 1)}
              >
                Unidade
              </button>
              <button
                className=" p-3 border border-blue-500 px-5 w-[50%]"
                onClick={() => decreaseSold(index, 14)}
              >
                Tabuleiro
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Padaria;
