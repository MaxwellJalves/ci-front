import { IListaDeAtividades } from "../../types/type";
import Item from "./Item/Item";
import "./style.scss";

const Lista: React.FC<IListaDeAtividades> = ({ lista }) => {
  return (
    <aside>
      <h2>Atividades</h2>
      {lista.map((item, index) => (
        <Item key={index} atividade={item.atividade} tempo={item.tempo} />
      ))}
    </aside>
  );
};

export default Lista;
