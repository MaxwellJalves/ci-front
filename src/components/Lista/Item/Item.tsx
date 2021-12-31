import { IAtividade } from "../../../types/type";
import "./style.scss";
const Item = ({ atividade, tempo }: IAtividade) => {
  return (
    <div className="container-item">
      <li>
        <h4>{atividade}</h4>
      </li>
      <li>{tempo}</li>
    </div>
  );
};

export default Item;
