import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MaskedInput from "../components/MaskedInput";
import { ArrowLeft } from "lucide-react";
import logo2 from "../img/logo2.png";
import video from "../img/trabalhadores.gif";
import Swal from "sweetalert2";

function ForgottenPassword() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();

  const handleReturn = () => {
    window.history.back();
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Link enviado com sucesso!",
      showConfirmButton: false,
      backdrop: "rgba(0, 0, 0, 0.4)",
      timer: 2500,
    });
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <div className="flex items-center justify-center h-screen p-4 bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
      <div className="flex flex-col lg:flex-row lg:bg-[#FCFCFB] lg:rounded-2xl lg:shadow-lg w-full max-w-md lg:max-w-2xl relative">
        <button
          onClick={handleReturn}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-900 focus:outline-none"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <aside className="hidden lg:block lg:w-1/2">
          <img
            src={video}
            alt="Login Visual"
            className="w-full h-full p-14 object-cover rounded-l-lg"
          />
        </aside>

        <main className="w-full lg:w-1/2 p-8">
          <div className="mb-8 text-center">
            <img src={logo2} alt="Logo" className="w-20 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-balance">
              Esqueceu sua senha?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Insira seu email e vamos te enviar um link para redefinir a sua
              senha.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <MaskedInput
              id="email"
              label="Email"
              type="email"
              placeholder="Digite seu email cadastrado"
              name="email"
              value={email}
              mask="email"
              validationPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              errorMessage="Email inválido"
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={!isEmailValid || !email}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#07AFFF] to-[#0470AE] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-[#058EDC] hover:to-[#03598A] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                !isEmailValid || !email ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Enviar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default ForgottenPassword;
