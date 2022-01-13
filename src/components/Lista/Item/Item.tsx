import { useState } from "react";
import { IAtividade } from "../../../types/type";
import "./style.scss";

const Item = ({
  atividade,
  tempo,
  selecionado,
  finalizado,
  obterAtividadeSelecionada,
}: IAtividade) => {
  const [select, setSelect] = useState(selecionado);
  return (
    <div
      className="container-item"
      style={{ background: `${select === true ? "green" : "#5E1914"}` }}
      onClick={() => {
        setSelect(!select);
      }}
    >
      {console.log("Item", atividade, tempo, selecionado, finalizado)}{" "}
      <div>
        <li>
          <h4>{atividade}</h4>
        </li>
        <li>{tempo}</li>
      </div>
      <span>{select ? "V" : "X"}</span>
    </div>
  );
};

export default Item;
