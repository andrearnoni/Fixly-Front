import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import Avatar from "../components/Avatar";
import seta_esquerda from "../img/seta-esquerda.png";
import tema from "../img/lua.png";
import sair from "../img/sair.png";

function SideBar({ toggleDarkMode, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { infoUsuario, logout } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
      >
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600"></div>
      </button>
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`fixed md:static h-screen ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } z-50 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div
          className={`p-4 space-y-4 shadow-md border-r ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          } h-full w-[250px] flex flex-col justify-between`}
        >
          <div>
            <div className="flex items-center justify-between mt-8 md:mt-0">
              <div className="flex items-center space-x-3">
                <Avatar />
                <span className="text-base" id="userName">
                  {infoUsuario
                    ? infoUsuario.nome
                    : "Nome do Usuário não disponível"}
                </span>
              </div>
              <button onClick={toggleSidebar} className="md:hidden text-black">
                <img src={seta_esquerda} className="w-5 h-5" />
              </button>
            </div>

            <hr
              className={`${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              }`}
            />
            <div>
              <h2
                className={`uppercase text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Main Menu
              </h2>
              <nav className="space-y-3 mt-2">
                <a
                  href="#"
                  className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded text-base hover:text-black ${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  <span>🏠</span>
                  <span>Inicio</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded text-base hover:text-black ${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  <span>💬</span>
                  <span>Conversas</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded text-base hover:text-black ${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  <span>📬</span>
                  <span>Caixa de Entrada</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded text-base hover:text-black ${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  <span>📅</span>
                  <span>Calendário</span>
                </a>
              </nav>
            </div>

            <hr
              className={`${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              }`}
            />
            <div>
              <h2
                className={`uppercase text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Suporte
              </h2>
              <nav className="space-y-3 mt-2">
                <a
                  href="#"
                  className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded text-base hover:text-black ${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  <span>⚙</span>
                  <span>Configurações</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded text-base hover:text-black ${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  <span>❓</span>
                  <span>Ajuda</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded text-base hover:text-black ${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  <span>✏</span>
                  <span>Editar Perfil</span>
                </a>
              </nav>
            </div>
          </div>

          <div>
            <hr
              className={`${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              }`}
            />
            <div className="flex items-center py-2 px-4">
              <img src={tema} className="w-5 h-5" />
              <span className="ml-2 text-base">Tema Escuro</span>
              <button
                onClick={toggleDarkMode}
                className={`ml-5 relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none ${
                  isDarkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span className="sr-only">Toggle Dark Mode</span>
                <span
                  className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    isDarkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center py-2 px-4">
              <img src={sair} className="w-5 h-5" />
              <button
                onClick={handleLogout}
                className={`block text-red-600 hover:text-red-800 text-base ${
                  isDarkMode ? "text-gray-300" : "text-gray-900"
                }`}
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
