import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import video from "../img/trabalhadores.gif";

function ClientLogin() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const mudarVisibilidade = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="flex flex-col lg:flex-row bg-[#FCFCFB] rounded-lg shadow-lg w-full max-w-sm lg:max-w-2xl">
        <aside className="hidden lg:block lg:w-1/2">
          <img
            src={video}
            alt="Login Visual"
            className="w-full h-full p-14 object-cover rounded-l-lg"
          />
        </aside>
        <main className="w-full lg:w-1/2 p-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-balance">
              Já é cliente? Acesse sua conta
            </h2>
          </div>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Digite seu email"
              />
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={senhaVisivel ? "text" : "password"}
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute bottom-[0.7rem] right-0 pr-3 flex items-center text-gray-600"
                onClick={mudarVisibilidade}
              >
                {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Esqueceu sua senha?
              </a>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Criar conta
              </a>
            </div>
            <div className="mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                Entrar
              </button>
            </div>
            <div className="text-center text-gray-600 mb-4">Ou acesse com</div>
            <div className="flex justify-between space-x-4">
              <button
                className="inline-flex items-center bg-white border border-gray-300 text-gray-700 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100"
                type="button"
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  className="inline-block mr-2"
                  alt="Google"
                />
                Google
              </button>
              <button
                className="inline-flex items-center bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100"
                type="button"
              >
                <img
                  src="https://img.icons8.com/?size=18&id=118497&format=png&color=000000"
                  className="pr-1"
                  alt="Facebook Logo"
                />
                Facebook
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default ClientLogin;
