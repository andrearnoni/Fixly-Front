import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MaskedInput from "../components/MaskedInput";
import { FaArrowLeft } from "react-icons/fa";
import logo2 from "../img/logo2.png";
import video from "../img/trabalhadores.gif";
import Swal from "sweetalert2";

function ForgottenPasword() {
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
    <div className="flex items-center justify-center h-screen p-4">
      <div className="flex flex-col lg:flex-row lg:bg-[#FCFCFB] sm:bg-white rounded-lg w-full max-w-md lg:max-w-2xl relative lg:shadow-lg">
        <button
          onClick={handleReturn}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-900 focus:outline-none"
          aria-label="Voltar"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <aside className="hidden lg:block lg:w-1/2">
          <img
            src={video}
            alt="Login Visual"
            className="w-full h-full p-14 object-cover rounded-l-lg"
          />
        </aside>
        <main className="w-full lg:w-1/2 p-8">
          <div>
            <img src={logo2} alt="Logo" className="w-20 mx-auto mb-6" />
          </div>
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-balance">
              Esqueceu sua senha?
            </h2>
          </div>
          <div className="mb-6 text-center">
            <p className="text-balance text-sm">
              Insira seu email e vamos te enviar um link para redefinir a sua
              senha.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <MaskedInput
                id="email"
                label="Email"
                placeholder="Digite seu email cadastrado"
                name="email"
                value={email}
                mask="email"
                validationPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                errorMessage="Email inválido"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
                  !isEmailValid || !email ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={!isEmailValid || !email}
              >
                Enviar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default ForgottenPasword;
