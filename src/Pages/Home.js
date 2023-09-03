import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link }) => {
  return (
    <Link
      className="bg-green-100 w-[50%] flex justify-center items-center h-[3rem] rounded-full"
      to={`/${link}`}
    >
      {link}
    </Link>
  );
};

const Home = () => {
  return (
    <div className="bg-red-500 flex flex-col gap-2 justify-center items-center h-[100vh] ">
      <Button link="Padaria"></Button>
      <Button link="Caixa"></Button>
    </div>
  );
};

export default Home;
