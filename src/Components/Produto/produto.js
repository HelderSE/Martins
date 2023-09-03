const Produto = ({ name, value }) => {
  return (
    <div className="text-center">
      <p> Pao com {name} </p>
      <p> Counter : {value}</p>
    </div>
  );
};

export default Produto;
