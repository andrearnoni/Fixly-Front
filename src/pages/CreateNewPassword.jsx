import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../img/logo2.png";
import video from "../img/trabalhadores.gif";
import Swal from "sweetalert2";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    const isValid = validatePassword(inputPassword);
    setIsPasswordValid(isValid);
    setDoPasswordsMatch(inputPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);
    setDoPasswordsMatch(password === inputConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Senha redefinida com sucesso!",
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
      <div className="flex flex-col lg:flex-row bg-[#FCFCFB] rounded-lg shadow-lg w-full max-w-sm lg:max-w-2xl">
        <aside className="hidden lg:block lg:w-1/2">
          <img
            src={video}
            alt="Visual"
            className="w-full h-full p-14 object-cover rounded-l-lg"
          />
        </aside>
        <main className="w-full lg:w-1/2 p-8">
          <div>
            <img src={logo2} alt="Logo" className="w-20 mx-auto mb-4" />
          </div>
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold text-balance">
              Redefina sua senha
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nova Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua nova senha"
                value={password}
                onChange={handlePasswordChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  !isPasswordValid && password
                    ? "border-red-500 border-[3px]"
                    : "border-gray-300"
                }`}
              />
              {!isPasswordValid && password && (
                <p className="text-red-500 text-xs italic mt-2">
                  A senha deve ter pelo menos 6 caracteres, incluindo uma letra
                  maiúscula, uma minúscula, um número e um caractere especial.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirmar Senha
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirme sua nova senha"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  !doPasswordsMatch && confirmPassword
                    ? "border-red-500 border-[3px]"
                    : "border-gray-300"
                }`}
              />
              {!doPasswordsMatch && confirmPassword && (
                <p className="text-red-500 text-xs italic mt-2">
                  As senhas não coincidem.
                </p>
              )}
            </div>
            <div className="mb-4">
              <button
                type="submit"
                disabled={!isPasswordValid || !doPasswordsMatch}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
                  !isPasswordValid || !doPasswordsMatch
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Salvar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default ResetPassword;
