import React, { createContext, useState } from "react";

export const Context = createContext();

function GlobalContext({ children }) {
  const [clientes, setClientes] = useState([]);
  const [profissionais, setProfissionais] = useState([]);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [step, setStep] = useState(1);
  const [stepCompleto, setStepCompleto] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("cliente");
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    nascimento: "",
    cpfCnpj: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    especialidade: "",
  });

  const Object = {
    clientes,
    setClientes,
    profissionais,
    setProfissionais,
    senhaVisivel,
    setSenhaVisivel,
    step,
    setStep,
    stepCompleto,
    setStepCompleto,
    tipoUsuario,
    setTipoUsuario,
    termosAceitos,
    setTermosAceitos,
    formData,
    setFormData,
    isLoading,
    startLoading,
    isLoggedIn,
    login,
    logout
  };

  return <Context.Provider value={Object}>{children}</Context.Provider>;
}

export default GlobalContext;
