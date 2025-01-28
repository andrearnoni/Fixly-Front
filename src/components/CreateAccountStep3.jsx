import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import TermosCondicoes from "./TermosECondicoes";
import Swal from "sweetalert2";

const CreateAccountStep3 = () => {
  const { setStepCompleto, termosAceitos, setTermosAceitos } =
    useContext(Context);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setTermosAceitos((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStepCompleto(false);
    Swal.fire({
      icon: "success",
      title: "Conta criada com sucesso!",
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
      <div className="flex flex-col lg:flex-row lg:bg-[#FCFCFB] sm:bg-white rounded-lg w-full max-w-md lg:max-w-3xl relative lg:shadow-lg">
        <main className="w-full p-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-balance">
              Crie sua conta gratuita - Passo 3
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
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
            <div className="flex items-center justify-between mb-4">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => navigate("/create-account/step2")}
              >
                Anterior
              </button>
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  !termosAceitos ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={!termosAceitos}
              >
                Criar Conta {console.log(termosAceitos)}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateAccountStep3;
