import { useState } from "react";
import { Camera } from "lucide-react";

function EditPanel() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg w-full mt-10">
        <h2 className="text-2xl font-bold text-center text-blue-500">
          Editar Perfil
        </h2>

        <div className="flex flex-col items-center my-4">
          <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer">
            <Camera className="absolute w-6 h-6 text-gray-500" />
          </div>
        </div>

        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Data de Nascimento</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium">CPF/CNPJ</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium">Endereço</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium">Número</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium">Bairro</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium">Cidade</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium">Estado</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium">Telefone</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="col-span-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPanel;
