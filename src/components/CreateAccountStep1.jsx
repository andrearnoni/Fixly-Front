import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import MaskedInput from "../components/MaskedInput";
import { ArrowLeft, Eye, EyeOff, ArrowRight } from "lucide-react";
import logo2 from "../img/logo2.png";

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
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  useEffect(() => {
    if (!formData.tipoUsuario) {
      setFormData({ ...formData, tipoUsuario });
    }
  }, [formData, setFormData, tipoUsuario]);

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
    navigate("/cadastro/passo2");
  };

  const isFormValid = () => {
    const nomeValido = /^\s*\S+(\s+\S+)+\s*$/.test(formData.nome);
    const emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      formData.email
    );
    const senhaValida = formData.senha && formData.senha.length >= 6;
    const senhasIguais = formData.senha === confirmacaoSenha;
    const tipoSelecionado = !!formData.tipoUsuario;

    return (
      nomeValido &&
      emailValido &&
      senhaValida &&
      senhasIguais &&
      tipoSelecionado
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-8 px-4 bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
      <div className="flex flex-col lg:flex-row lg:bg-[#FCFCFB] lg:rounded-2xl lg:shadow-lg w-full max-w-md lg:max-w-2xl relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-900 focus:outline-none"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <main className="w-full p-8">
          <div className="mb-8 text-center">
            <img src={logo2} alt="Logo" className="w-20 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700">
              Crie sua conta gratuita
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="nome"
              >
                Nome completo
              </label>
              <MaskedInput
                id="nome"
                placeholder="Digite seu nome completo"
                name="nome"
                value={formData.nome}
                type="text"
                validationPattern="^\s*\S+(\s+\S+)+\s*$"
                errorMessage="Digite seu nome e sobrenome"
                onChange={handleChange}
                required
                hasIcon={false}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <MaskedInput
                id="email"
                placeholder="Digite seu email"
                name="email"
                value={formData.email}
                type="email"
                validationPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                errorMessage="Email inválido"
                onChange={handleChange}
                required
                hasIcon={false}
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Tipo de usuário
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="tipoUsuario"
                    value="CLIENTE"
                    onChange={handleChange}
                    checked={formData.tipoUsuario === "CLIENTE"}
                  />
                  Quero contratar um serviço
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="tipoUsuario"
                    value="PRESTADOR"
                    onChange={handleChange}
                    checked={formData.tipoUsuario === "PRESTADOR"}
                  />
                  Quero me registrar como prestador de serviços
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Senha
              </label>
              <div className="relative">
                <MaskedInput
                  id="senha"
                  placeholder="Digite sua senha"
                  name="senha"
                  value={formData.senha}
                  type={senhaVisivel ? "text" : "password"}
                  validationPattern=".{6,}"
                  errorMessage="Senha deve ter pelo menos 6 caracteres"
                  onChange={handleChange}
                  required
                  hasIcon={false}
                  eyesIcon={true}
                />
                <button
                  type="button"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  {senhaVisivel ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Confirme a senha
              </label>
              <MaskedInput
                id="confirmacaoSenha"
                placeholder="Digite novamente a senha"
                name="confirmacaoSenha"
                value={confirmacaoSenha}
                type="password"
                customValidation={(value) => value === formData.senha}
                errorMessage="As senhas não conferem"
                onChange={(e) => setConfirmacaoSenha(e.target.value)}
                required
                hasIcon={false}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`inline-flex max-sm:w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#07AFFF] to-[#0470AE] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-[#058EDC] hover:to-[#03598A] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                  !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid()}
              >
                Próximo <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateAccountStep1;
