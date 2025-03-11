import { useState, useEffect } from "react";
import Context from "./Context";
import * as authService from "../services/auth-service";

const defaultFormData = {
  nome: "",
  email: "",
  tipoUsuario: "",
  senha: "",
  nascimento: "",
  cpfCnpj: "",
  cep: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  estado: "",
  principal: true,
};

function GlobalContext({ children }) {
  const [clientes, setClientes] = useState([]);
  const [profissionais, setProfissionais] = useState([]);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [step, setStep] = useState(1);
  const [stepCompleto, setStepCompleto] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [infoUsuario, setInfoUsuario] = useState(null);
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState(defaultFormData);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const token = authService.getAccessToken();
    if (token) {
      setIsLoading(true);
      authService
        .fetchUserData(token)
        .then((response) => {
          setInfoUsuario(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            authService.logout();
            setInfoUsuario(null);
          } else {
            console.error(error);
          }
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

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
  };

  const logout = () => {
    authService.logout();
    setInfoUsuario(null);
  };

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
    infoUsuario,
    setInfoUsuario,
    isLoading,
    startLoading,
    resetRegistration,
    chatOpen,
    setChatOpen,
    logout,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default GlobalContext;
