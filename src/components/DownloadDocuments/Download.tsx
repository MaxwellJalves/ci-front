import { useState } from "react";
import axios from "axios";

export default function Download() {
  const arquivo =
    "https://docs.google.com/uc?export=download&id=1Ch-6iAxr0Bo8wMCGFnlC6ObH_CixdRG-";
  const [download, setDownload] = useState("");

  function obter() {
    const data = axios
      .get(arquivo, {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000/",
          "Access-Control-Allow-Headers": "Authorization",
          "Access-Control-Allow-Methods": "GET",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((d) => setDownload(JSON.stringify(d.data)));
    console.log(data);
  }

  return (
    <>
      <h2>Download</h2>
      {download ? (
        <iframe title="download" src={arquivo} style={{ display: "none" }}>
          download
        </iframe>
      ) : (
        ""
      )}
      <button onClick={() => obter()}>Baixar</button>
    </>
  );
}
