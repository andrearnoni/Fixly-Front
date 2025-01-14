import React, { createContext, useState } from "react";

export const Context = createContext();

function GlobalContext({ children }) {
  const [clientes, setClientes] = useState([]);
  const [profissionais, setProfissionais] = useState([]);
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const Object = {
    clientes,
    setClientes,
    profissionais,
    setProfissionais,
    senhaVisivel,
    setSenhaVisivel,
  };

  return <Context.Provider value={Object}>{children}</Context.Provider>;
}

export default GlobalContext;
