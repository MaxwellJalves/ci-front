import React, { useState } from "react";
import Button from "../Botao/Button";
import "./style.scss";
const Formulario = () => {
  //Objetos do input
  const [atividade, setAtividade] = useState<string>();
  const [tempo, setTempo] = useState<string>();
  //Array que será responsavel por adicionar os objetos na lista
  const [item, setItem] = useState([{ atividade, tempo }]);

  function adicionar(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    //Utilizando o spread para recuperar o estado anterior e adicionar o novo estado
    setItem([...item, { atividade, tempo }]);
    console.log(item);
  }

  return (
    <>
      <form className="container" onSubmit={adicionar}>
        <label htmlFor="atividade">Atividade</label>
        <input
          type="text"
          name="atividade"
          id="atividade"
          value={atividade}
          onChange={(e) => setAtividade(e.target.value)}
          required
        />

        <label htmlFor="tempo">Tempo estimado </label>
        <input
          type="time"
          name="tempo"
          id="tempo"
          min={0}
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          required
        />
        <>
          <Button
            tipo="submit"
            titulo="Registrar"
            onClick={(e) => {
              setItem([...item, { atividade, tempo }]);
              console.log(item);
            }}
          />
        </>
      </form>
    </>
  );
};
export default Formulario;
