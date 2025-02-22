import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import TermosCondicoes from "./TermosECondicoes";
import { salvarCadastroLocalStorage } from "../services/RegistrationService";
import { ArrowLeft } from "lucide-react";
import logo2 from "../img/logo2.png";
import Swal from "sweetalert2";

const CreateAccountStep3 = () => {
  const {
    setStepCompleto,
    termosAceitos,
    setTermosAceitos,
    formData,
    resetRegistration,
  } = useContext(Context);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setTermosAceitos((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    salvarCadastroLocalStorage(formData);
    setStepCompleto(false);
    Swal.fire({
      icon: "success",
      title: "Conta criada com sucesso!",
      showConfirmButton: false,
      backdrop: "rgba(0, 0, 0, 0.4)",
      timer: 2500,
    });
    resetRegistration();
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <div className="flex items-center justify-center h-screen p-4 bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
      <div className="flex flex-col lg:flex-row lg:bg-[#FCFCFB] lg:rounded-2xl lg:shadow-lg w-full max-w-md lg:max-w-2xl relative">
        <main className="w-full p-8">
          <div className="mb-8 text-center">
            <img src={logo2} alt="Logo" className="w-20 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700">
              Crie sua conta gratuita - Passo 3
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <TermosCondicoes />
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="aceitar"
                  name="termos"
                  checked={termosAceitos}
                  onChange={handleCheckboxChange}
                />
                <label className="text-gray-700" htmlFor="aceitar">
                  Declaro que li e aceito os termos e condições
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap-reverse gap-4 mb-4">
              <button
                className="inline-flex max-sm:w-full items-center justify-center gap-2 rounded-md bg-gradient-to-l from-black/50 to-gray-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-black/60 hover:to-gray-800 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                type="button"
                onClick={() => navigate("/cadastro/passo2")}
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Anterior
              </button>
              <button
                className={`inline-flex max-sm:w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#07AFFF] to-[#0470AE] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-[#058EDC] hover:to-[#03598A] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                  !termosAceitos ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={!termosAceitos}
              >
                Criar Conta
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateAccountStep3;
