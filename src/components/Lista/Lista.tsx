import { IListaDeAtividades } from "../../types/type";
import Item from "./Item/Item";
import "./style.scss";

const Lista = ({
  atividadesProps,
  obterAtividadeSelecionada,
}: IListaDeAtividades) => {
  return (
    <aside>
      <h2>Atividades</h2>

      {atividadesProps.map((item) => (
        <Item
          obterAtividadeSelecionada={obterAtividadeSelecionada}
          key={item.id}
          {...item}
        />
      ))}
    </aside>
  );
};

export default Lista;
