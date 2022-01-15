import React, { Dispatch, SetStateAction, useState } from "react";
import { IAtividade } from "../../types/type";
import Button from "../Botao/Button";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

interface IProps {
  setAtividades: Dispatch<SetStateAction<IAtividade[]>>;
}
const Formulario = ({ setAtividades }: IProps) => {
  const [atividade, setAtividade] = useState("");
  const [tempo, setTempo] = useState("");

  function adicionar(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();

    setAtividades((anterior) => [
      ...anterior,
      { atividade, tempo, selecionado: false, finalizado: false, id: uuidv4() },
    ]);
    limparInput();
  }

  function limparInput() {
    setAtividade("");
    setTempo("00:00:00");
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
          <Button tipo="submit" titulo="Registrar" />
        </>
      </form>
    </>
  );
};
export default Formulario;
