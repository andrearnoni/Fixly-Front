import { useState } from "react";
import Context from "./Context";

const defaultFormData = {
  nome: "",
  email: "",
  senha: "",
  nascimento: "",
  cpfCnpj: "",
  cep: "",
  endereco: "",
  numero: "",
  bairro: "",
  cidade: "",
  estado: "",
  especialidade: "",
};

function GlobalContext({ children }) {
  const [clientes, setClientes] = useState([]);
  const [profissionais, setProfissionais] = useState([]);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [step, setStep] = useState(1);
  const [stepCompleto, setStepCompleto] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("cliente");
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const [chatOpen, setChatOpen] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const resetRegistration = () => {
    setFormData(defaultFormData);
    setStep(1);
    setStepCompleto(false);
    setTipoUsuario("cliente");
    setTermosAceitos(false);
  };

  const toggleChat = () => setChatOpen(!chatOpen);

  const value = {
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
    resetRegistration,
    chatOpen,
    setChatOpen,
    toggleChat,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default GlobalContext;
