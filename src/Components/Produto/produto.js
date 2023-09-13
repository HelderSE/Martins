import produtos from "../../Produtos.json";

const Produto = ({ id, value }) => {
  var imageName = produtos[id].name;
  if (id < 2) {
    imageName += "-i";
  }
  return (
    <div className="text-center flex flex-col">
      <div
        className={`h-[33vh] flex flex-col justify-center bg-${imageName} bg-no-repeat bg-contain  `}
      >
        <p> Pao com {produtos[id].name} </p>
        <p> Counter : {value}</p>
      </div>
    </div>
  );
};

export default Produto;
