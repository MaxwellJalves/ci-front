import { useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";

import { IAtividade } from "../types/type";
import "./style.scss";
import Download from "../components/DownloadDocuments/Download";
import Item from "../components/Lista/Item/Item";

const App = () => {
  const [atividades, setAtividades] = useState<IAtividade[]>([]);
  const [selecionado, setSelecionado] = useState<IAtividade>();

  function obterAtividadeSelecionada(atividadeSelecionada: IAtividade) {
    setSelecionado(atividadeSelecionada);

    setAtividades((atividadesAnteriores) =>
      atividadesAnteriores.map((item) => {
        return {
          ...item,
          selecionado: selecionado?.id === item.id ? true : false,
        };
      })
    );
    console.log("DEBUG APP", atividades);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "24px",
          color: "white",
          fontSize: "24px",
        }}
      >
        Atividades 2022
      </div>
      <div className="AppStyle">
        <Formulario setAtividades={setAtividades} />
        <Lista
          lista={atividades}
          obterAtividadeSelecionada={obterAtividadeSelecionada}
        />
      </div>
      <div>
        <Download />
      </div>
    </>
  );
};

export default App;
