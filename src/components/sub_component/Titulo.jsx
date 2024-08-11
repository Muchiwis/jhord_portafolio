const Titulo = ({ className, valor }) => {
  return (
    <h2
      className={`bg-clip-text text-transparent bg-gradient-to-r from-orange-300  to-orange-100 text-4xl font-normal  ${className}`}
    >
      {valor}
    </h2>
  );
};
export default Titulo;
