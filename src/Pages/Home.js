import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link }) => {
  return (
    <Link
      className="bg-green-300 my-10 border w-[100%] flex justify-center items-center h-[3rem] rounded-full"
      to={`/${link}`}
    >
      {link}
    </Link>
  );
};

const Home = () => {
  return (
    <div className="bg-home-page bg-cover flex flex-col gap-[2rem] justify-center items-center h-[100vh] ">
      <div className="w-[40vh] h-[40vh] border-2 bg-padaria-i bg-no-repeat bg-cover flex flex-col justify-end">
        <Button link="Padaria"></Button>
      </div>
      <div className="w-[40vh] h-[40vh] border-2 bg-caixa-i bg-no-repeat bg-cover flex flex-col justify-start">
        <Button link="Caixa"></Button>
      </div>
    </div>
  );
};

export default Home;
