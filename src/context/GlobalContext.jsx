import React, { createContext, useState } from "react";

export const Context = createContext();

function GlobalContext({ children }) {
  const [clientes, setClientes] = useState([]);
  const [profissionais, setProfissionais] = useState([]);

  const Object = {
    clientes,
    setClientes,
    profissionais,
    setProfissionais,
  };

  return <Context.Provider value={Object}>{children}</Context.Provider>;
}

export default GlobalContext;
