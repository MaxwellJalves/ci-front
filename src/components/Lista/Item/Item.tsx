import { IAtividade } from "../../../types/type";
import "./style.scss";

interface Props extends IAtividade {
  obterAtividadeSelecionada: (atividadeSelecionada: IAtividade) => void;
}

const Item = ({
  atividade,
  tempo,
  selecionado,
  finalizado,
  id,
  obterAtividadeSelecionada,
}: Props) => {
  return (
    <div
      className="container-item"
      style={{ background: `${selecionado === true ? "green" : "#5E1914"}` }}
      onClick={() =>
        obterAtividadeSelecionada({
          atividade,
          tempo,
          selecionado,
          finalizado,
          id,
        })
      }
    >
      {console.log("Item", atividade, tempo, selecionado, finalizado)}{" "}
      <div>
        <li>
          <h4>{atividade.toUpperCase()}</h4>
        </li>
        <li>{tempo}</li>
      </div>
      <span>{selecionado ? "V" : "X"}</span>
    </div>
  );
};

export default Item;
