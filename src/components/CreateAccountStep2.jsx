import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import MaskedInput from "./MaskedInput";

const CreateAccountStep2 = () => {
  const { setStep, stepCompleto, tipoUsuario, formData, setFormData } =
    useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (!stepCompleto) {
      navigate("/create-account/step1");
    }
  }, [stepCompleto, navigate]);

  useEffect(() => {
    console.log("FormData atualizado:", formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
    navigate("/create-account/step3");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-10">
      <div className="flex flex-col lg:flex-row bg-[#FCFCFB] rounded-lg shadow-lg w-full max-w-sm lg:max-w-3xl">
        <main className="w-full p-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-balance">
              Crie sua conta gratuita - Passo 2
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <MaskedInput
                id="telefone"
                label="Telefone"
                placeholder="Digite seu telefone"
                mask="telefone"
                name="telefone"
                value={formData.telefone}
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <MaskedInput
                id="nascimento"
                label="Data de nascimento"
                placeholder="Digite sua data de nascimento"
                mask="data"
                name="nascimento"
                value={formData.nascimento}
                type="text"
                onChange={handleChange}
              />
            </div>
            {tipoUsuario === "cliente" ? (
              <div className="mb-4">
                <MaskedInput
                  id="cpf"
                  label="CPF"
                  placeholder="Digite seu CPF"
                  mask="cpf"
                  name="cpfCnpj"
                  value={formData.cpfCnpj}
                  type="text"
                  onChange={handleChange}
                />
              </div>
            ) : (
              <MaskedInput
                id="cnpj"
                label="CNPJ"
                placeholder="Digite seu CNPJ"
                mask="cnpj"
                name="cpfCnpj"
                value={formData.cpfCnpj}
                type="text"
                onChange={handleChange}
              />
            )}
            <div className="mb-4">
              <MaskedInput
                id="cep"
                label="CEP"
                placeholder="Digite seu CEP"
                mask="cep"
                name="cep"
                value={formData.cep}
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="endereco"
              >
                Endereço
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="endereco"
                name="endereco"
                type="text"
                placeholder="Digite o endereço do seu endereço"
                value={formData.endereco}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="numero"
              >
                Número
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="numero"
                name="numero"
                type="number"
                placeholder="Digite o número do seu endereço"
                value={formData.numero}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bairro"
              >
                Bairro
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bairro"
                name="bairro"
                type="text"
                placeholder="Digite o bairro do seu endereço"
                value={formData.bairro}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cidade"
              >
                Cidade
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cidade"
                name="cidade"
                type="text"
                placeholder="Digite sua cidade"
                value={formData.cidade}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="estado"
              >
                Estado
              </label>
              <div className="relative">
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white max-h-48 overflow-auto"
                  name="estado"
                  id="estado"
                  value={formData.estado}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Selecione um estado
                  </option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>
            {tipoUsuario === "prestador" && (
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="especialidade"
                >
                  Especialidade do serviço a ser prestado
                </label>
                <div className="relative">
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white max-h-48 overflow-auto"
                    name="especialidade"
                    id="especialidade"
                    value={formData.especialidade}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Selecione uma especialidade
                    </option>
                    <option value="Cabeleireiro">Jardineiro(a)</option>
                    <option value="Barbeiro">Encanador(a)</option>
                    <option value="Pintor">Pintor(a)</option>
                    <option value="Aparelho de barba">Faxineiro(a)</option>
                    <option value="Outro">Outro</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => navigate("/create-account/step1")}
              >
                Anterior
              </button>
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  !formData.telefone ||
                  !formData.nascimento ||
                  !formData.cpfCnpj ||
                  !formData.cep ||
                  !formData.endereco ||
                  !formData.numero ||
                  !formData.bairro ||
                  !formData.cidade ||
                  !formData.estado ||
                  !formData.especialidade
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                type="submit"
                disabled={
                  !formData.telefone ||
                  !formData.nascimento ||
                  !formData.cpfCnpj ||
                  !formData.cep ||
                  !formData.endereco ||
                  !formData.numero ||
                  !formData.bairro ||
                  !formData.cidade ||
                  !formData.estado ||
                  !formData.especialidade
                }
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

export default CreateAccountStep2;
