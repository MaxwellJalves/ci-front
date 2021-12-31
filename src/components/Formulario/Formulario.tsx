import "./style.scss";
const Formulario = () => {
  return (
    <form className="container">
      <label htmlFor="descricao">Descrição</label>
      <input type="text" name="descricao" id="descricao" />

      <label htmlFor="descricao">Duração</label>
      <input type="date" name="descricao" id="descricao" />
    </form>
  );
};
export default Formulario;
