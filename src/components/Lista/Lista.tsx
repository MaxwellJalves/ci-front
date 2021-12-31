import Item from "./Item/Item";
import "./style.scss";

const Lista = () => {
  const lista = [
    { atividade: "Estudar React", tempo: "00:30" },
    { atividade: "Estudar Java", tempo: "00:30" },
    { atividade: "Tocar Violão", tempo: "00:30" },
  ];
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
