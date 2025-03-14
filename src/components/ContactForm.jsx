import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function ContactForm() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg w-full mt-10 relative">
        <button
          onClick={handleReturn}
          className="absolute top-6 left-6 text-gray-400 hover:text-gray-900 focus:outline-none"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-center text-black">
          Entre em Contato!
        </h2>

        <form className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <label className="block font-medium">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium">E-mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium">Mensagem</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
              rows="4"
            ></textarea>
          </div>

          <div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
