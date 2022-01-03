import { useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";
import { IAtividade } from "../types/type";
import "./style.scss";
const App = () => {
  const [atividades, setAtividades] = useState<IAtividade[]>([]);
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
        <Lista lista={atividades} />
      </div>
    </>
  );
};

export default App;
