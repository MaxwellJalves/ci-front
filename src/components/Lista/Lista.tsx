import { IListaDeAtividades } from "../../types/type";
import Item from "./Item/Item";
import "./style.scss";

const Lista = ({ lista, obterAtividadeSelecionada }: IListaDeAtividades) => {
  return (
    <aside>
      <h2>Atividades</h2>
      {lista.map((item) => (
        <Item
          key={item.id}
          {...item}
          obterAtividadeSelecionada={obterAtividadeSelecionada}
        />
      ))}
    </aside>
  );
};

export default Lista;
