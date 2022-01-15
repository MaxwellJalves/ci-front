import { useCallback, useEffect, useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";

import { IAtividade } from "../types/type";
import "./style.scss";
import Download from "../components/DownloadDocuments/Download";

const App = () => {
  const [atividades, setAtividades] = useState<IAtividade[]>([]);
  const [selecao, setSelecionado] = useState<IAtividade>();

  function obterAtividadeSelecionada(atividadeSelecionada: IAtividade) {
    setSelecionado(atividadeSelecionada);
    setAtividades((anteriores) =>
      anteriores.map((old) => ({
        ...old,
        selecionado: old.id === atividadeSelecionada.id,
      }))
    );
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
          atividadesProps={atividades}
          obterAtividadeSelecionada={obterAtividadeSelecionada}
        />
      </div>
      <button type="button" onClick={() => console.log(selecao)}>
        teste
      </button>

      <div>
        <Download />
      </div>
    </>
  );
};

export default App;
