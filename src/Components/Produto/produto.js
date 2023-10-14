import produtos from "../../Produtos.json";
import React from "react";

const Produto = ({ id, value }) => {
  var imageSrc = produtos[id].img;
  if (id < 2) {
   // imageName += "-i";
  }
  return (
    <div className="text-center flex w-1/2 flex-col">
    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter  hover:grayscale-0">
    <a href="#">
    <img className="rounded-lg w-x-20 w-y-30" src={imageSrc} alt='product image ${id}'/>
    </a>
  <figcaption className="absolute px-4 text-lg text-black bottom-6 text-center flex flex-col">
        <p className="text-4xl font-black text-gray-900 dark:text-green-600"> Pao com {produtos[id].name} </p>
        <p className="items-end flex-col-reverse"> Counter : {value}</p>
  </figcaption>
  </figure>
    </div>
  );
};

export default Produto;
