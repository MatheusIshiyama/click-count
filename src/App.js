import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    select();
  }, []);

  function select() {
    axios
      .get("/select")
      .then((response) => {
        if (response.data.error) alert(response.data.error);
        else setRegistros(response.data.rows);
      })
      .catch((error) => alert(error.message));
  }

  const lista = registros.map((registro) => (
    <div>
      {registro.nro}: {registro.quant}
    </div>
  ));

  return <div className="App"> {lista} </div>;
}
