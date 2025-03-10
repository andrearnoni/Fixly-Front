import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import MaskedInput from "../components/MaskedInput";
import Swal from "sweetalert2";
import logo2 from "../img/logo2.png";
import video from "../img/trabalhadores.gif";

function CreateNewPassword() {
  const { formData, setFormData } = useContext(Context);

  const navigate = useNavigate();

  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senhaConfirmaVisivel, setSenhaConfirmaVisivel] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Senha redefinida com sucesso!",
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const isFormValid = () => {
    const senhaValida = formData.senha && formData.senha.length >= 6;
    const senhasIguais = formData.senha === confirmacaoSenha;

    return senhaValida && senhasIguais;
  };

  return (
    <div className="flex items-center justify-center h-screen p-4 bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
      <div className="flex flex-col lg:flex-row lg:bg-[#FCFCFB] lg:rounded-2xl lg:shadow-lg w-full max-w-md lg:max-w-2xl relative">
        <button
          onClick={() => navigate("/login")}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-900 focus:outline-none"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <aside className="hidden lg:block lg:w-1/2">
          <img
            src={video}
            alt="Visual"
            className="w-full h-full p-14 object-cover rounded-l-lg"
          />
        </aside>

        <main className="w-full lg:w-1/2 p-8">
          <div className="mb-8 text-center">
            <img src={logo2} alt="Logo" className="w-20 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-balance">Redefinir senha</h2>
            <p className="mt-2 text-sm text-gray-600">
              Por favor, insira a nova senha e confirme para prosseguir
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="senha"
                className="block text-gray-700 text-sm font-bold mb-1"
              >
                Nova Senha
              </label>
              <div className="relative">
                <MaskedInput
                  id="senha"
                  placeholder="Digite sua nova senha"
                  name="senha"
                  value={formData.senha}
                  type={senhaVisivel ? "text" : "password"}
                  validationPattern=".{6,}"
                  errorMessage="Senha deve ter pelo menos 6 caracteres"
                  onChange={handleChange}
                  required
                  hasIcon={true}
                  eyesIcon={true}
                />
                <button
                  type="button"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
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
              <div className="relative">
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
                  hasIcon={true}
                  eyesIcon={true}
                />
                <button
                  type="button"
                  onClick={() => setSenhaConfirmaVisivel(!senhaConfirmaVisivel)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {senhaConfirmaVisivel ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`inline-flex max-sm:w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#07AFFF] to-[#0470AE] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-[#058EDC] hover:to-[#03598A] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                  !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid()}
              >
                Redefinir senha
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default CreateNewPassword;
