import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ link }) => {
  return (
    <Link
      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-[1rem] py-[1rem] text-center  my-[2rem]  w-[10rem]"     
      to={`/${link}`}
    >
      {link}
    </Link>
  );
};

const Home = () => {
  return (
    <div className="bg-home-page bg-cover flex flex-col gap-[2rem] justify-center items-center h-full w-full">
      <div className="w-[40%] h-[40%] border-2 bg-padaria-i bg-no-repeat bg-cover flex flex-col justify-end items-center">
        <Button link="Padaria"></Button>
      </div>
      <div className="w-[40%] h-[40%] border-2 bg-caixa-i bg-no-repeat bg-cover flex flex-col justify-start items-center">
        <Button link="Caixa"></Button>
      </div>
    </div>
  )
};

export default Home;
