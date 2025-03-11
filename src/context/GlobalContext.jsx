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
  // Novo estado para a foto de perfil
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Carregar a imagem do localStorage quando o componente iniciar
    const savedImage = localStorage.getItem("userProfileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }

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

  // Nova função para gerenciar o upload de imagem
  const handleProfileImageUpload = (file) => {
    if (!file) return;

    // Verificações de tipo e tamanho
    if (!file.type.match("image.*")) {
      throw new Error("Por favor selecione uma imagem válida");
    }

    if (file.size > 2 * 1024 * 1024) {
      throw new Error("Imagem muito grande! O tamanho máximo é 2MB.");
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const imageBase64 = e.target.result;
          setProfileImage(imageBase64);
          localStorage.setItem("userProfileImage", imageBase64);
          resolve(imageBase64);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

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
    // Remover a imagem ao fazer logout
    localStorage.removeItem("userProfileImage");
    setProfileImage(null);

    // Logout existente
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
    // Adicionar ao contexto
    profileImage,
    handleProfileImageUpload,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default GlobalContext;
