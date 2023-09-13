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
          <div
            key={index}
            className="bg-red-300 border-y-4 border-y-red-600 h-[34%]  flex justify-"
          >
            <div className=" w-[70%]">
              <Produto id={index} value={items[index]} />
            </div>
            <div className="flex flex-col items-center justify-center w-[30%]">
              <button
                className="font-serif h-[50%] p-3 px-3 justify-center text-red-500 text-[1.1rem]  text-clip border-4 border-green-500 w-[100%] bg-[url(https://espacocasa.com/wp-content/uploads/2022/04/621633.png)] bg-cover bg-no-repeat"
                onClick={() => decreaseSold(index, 14)}
              >
                Tabuleiro
              </button>
              <button
                className="font-serif h-[50%] border-4 border-green-300 text-[1.1rem]  w-[100%] bg-[url(https://www.terra.com.br/culinaria/infograficos/tipos-de-paes/galeria/fotos/1.jpg)] bg-cover bg-no-repeat"
                onClick={() => decreaseSold(index, 1)}
              >
                Unidade
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Padaria;
