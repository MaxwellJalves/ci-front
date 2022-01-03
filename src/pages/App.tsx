import React from "react";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";
import "./style.scss";
const App = () => {
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
        <Formulario />
        <Lista />
      </div>
    </>
  );
};

export default App;
