import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import MaskedInput from "../components/MaskedInput";
import { FaArrowLeft } from "react-icons/fa";

const CreateAccountStep1 = () => {
  const {
    formData,
    setFormData,
    setStep,
    tipoUsuario,
    setTipoUsuario,
    setStepCompleto,
  } = useContext(Context);
  const navigate = useNavigate();
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

  const handleReturn = () => {
    window.history.back();
  };

  useEffect(() => {
    if (!formData.tipoUsuario) {
      setFormData({ ...formData, tipoUsuario });
    }
  }, [formData, setFormData, tipoUsuario]);

  const handleConfirmaçãoSenha = (e) => {
    setConfirmacaoSenha(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "tipoUsuario") {
      setTipoUsuario(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStepCompleto(true);
    setStep(2);
    navigate("/create-account/step2");
  };

  const isFormValid = () => {
    return (
      formData.nome &&
      formData.email &&
      formData.senha &&
      formData.tipoUsuario &&
      formData.senha === confirmacaoSenha
    );
  };

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="flex flex-col lg:flex-row bg-[#FCFCFB] rounded-lg shadow-lg w-full max-w-sm lg:max-w-3xl relative">
        <button
          onClick={handleReturn}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-900 focus:outline-none"
          aria-label="Voltar"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <main className="w-full p-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-balance">
              Crie sua conta gratuita - Passo 1
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nome"
              >
                Nome completo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nome"
                type="text"
                placeholder="Digite seu nome completo"
                name="nome"
                autoComplete="off"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <MaskedInput
              id="email"
              label="Email"
              placeholder="Digite seu email"
              name="email"
              value={formData.email}
              mask="email"
              validationPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              errorMessage="Email inválido"
              onChange={handleChange}
            />
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tipo de usuário
              </label>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="cliente"
                  name="tipoUsuario"
                  value="cliente"
                  onChange={handleChange}
                  checked={formData.tipoUsuario === "cliente"}
                />
                <label className="text-gray-700" htmlFor="cliente">
                  Quero contratar um serviço
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="radio"
                  id="prestador"
                  name="tipoUsuario"
                  value="prestador"
                  onChange={handleChange}
                  checked={formData.tipoUsuario === "prestador"}
                />
                <label className="text-gray-700" htmlFor="prestador">
                  Quero me registrar como prestador de serviços
                </label>
              </div>
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="senha"
              >
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="senha"
                type="password"
                placeholder="Cadastre uma senha de 6 dígitos"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmacaoSenha"
              >
                Confirme a senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmacaoSenha"
                type="password"
                placeholder="Digite novamente a senha"
                name="confirmacaoSenha"
                value={confirmacaoSenha}
                onChange={handleConfirmaçãoSenha}
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={!isFormValid()}
              >
                Próximo
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateAccountStep1;
