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
        <label htmlFor="atividade">Atividade</label>
        <input type="text" name="atividade" id="atividade" required />

        <label htmlFor="tempo">Tempo estimado </label>
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
