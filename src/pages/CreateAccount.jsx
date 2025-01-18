import React, { useState } from "react";

function CreateAccount() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col  lg:flex-row bg-[#FCFCFB] rounded-lg shadow-lg w-full max-w-sm lg:max-w-3xl">
        <main className="w-full p-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-balance">
              Crie sua conta gratuita
            </h2>
          </div>
          <form action="">
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
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mb-4">
              <div className="grid gap-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="telefone"
                >
                  Telefone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="telefone"
                  name="telefone"
                  type="text"
                  placeholder="Digite seu telefone com DDD"
                />
              </div>
              <div className="grid gap-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nascimento"
                >
                  Data de nascimento
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nascimento"
                  name="nascimento"
                  type="text"
                  placeholder="Digite sua data de nascimento"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mb-4">
              <div className="grid gap-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="CPF"
                >
                  CPF
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cpf"
                  name="cpf"
                  type="text"
                  placeholder="Digite seu CPF"
                />
              </div>
              <div className="grid gap-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cep"
                >
                  CEP
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cep"
                  name="cep"
                  type="text"
                  placeholder="Digite seu CEP"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="endereco"
              >
                Endereço
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="endereco"
                type="text"
                placeholder="Digite seu endereço"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mb-4">
              <div className="grid gap-1">
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
                />
              </div>
              <div className="grid gap-1">
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
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mb-4">
              <div className="grid gap-1">
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
                />
              </div>
              <div className="grid gap-1">
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
                  >
                    <option disabled selected value="">
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
            </div>
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
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Cadastre uma senha de 6 digitos"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default CreateAccount;
