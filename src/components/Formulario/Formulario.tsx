import React from "react";
import Button from "../Botao/Button";
import "./style.scss";
const Formulario = () => {
  const debug = (evento: React.FormEvent<HTMLElement>) => {
    evento.preventDefault();
  };
  return (
    <>
      <form className="container">
        <label htmlFor="descricao">Descrição</label>
        <input type="text" name="descricao" id="descricao" required />

        <label htmlFor="tempo">Duração</label>
        <input type="date" name="tempo" id="tempo" required />
        <>
          <Button
            tipo="submit"
            titulo="Registrar"
            onClick={(e) => {
              debug(e);
            }}
          />
        </>
      </form>
    </>
  );
};
export default Formulario;
