import React, { useState, useEffect } from "react";
import seta_direita from "../img/seta-direita.png";
import seta_esquerda from "../img/seta-esquerda.png";
import tema from "../img/lua.png";
import sair from "../img/sair.png";

function SideBar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen bg-white text-gray-900">
            <div className={`bg-white text-black p-5 space-y-6 transition-all duration-300 shadow-md border-r border-gray-300 
                ${isOpen ? "w-80" : "w-0 overflow-hidden"}`
            }>
                {isOpen && (
                    <>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <span id="userName">Fulano da Silva</span>
                            </div>
                            <button onClick={toggleSidebar} className="text-black">
                                <img src={seta_esquerda} className="w-6 h-6" />
                            </button>
                        </div>
                        <hr className="border-gray-300" />
                        <div>
                            <h2 className="text-gray-500 uppercase text-sm">Main Menu</h2>
                            <nav className="space-y-4 mt-2">
                                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded"><span>🏠</span>
                                    <span>Inicio</span></a>
                                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded"><span>💬</span>
                                    <span>Conversas</span></a>
                                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded">
                                    <span>📬</span> <span>Caixa de Entrada</span>
                                </a>
                                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded"><span>📅</span>
                                    <span>Calendário</span></a>
                            </nav>
                        </div>
                        <hr className="border-gray-300" />
                        <div>
                            <h2 className="text-gray-500 uppercase text-sm">Suporte</h2>
                            <nav className="space-y-4 mt-2">
                                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded"><span>⚙</span>
                                    <span>Configurações</span></a>
                                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded"><span>❓</span>
                                    <span>Ajuda</span></a>
                                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-200 rounded"><span>✏</span>
                                    <span>Editar Perfil</span></a>
                            </nav>
                        </div>
                        <hr className="border-gray-300" />
                        <div className="flex items-center py-2 px-4">
                            <img src={tema} className="w-6 h-6" />
                            <span className="ml-1">Tema Escuro</span>
                            <input type="checkbox" className="toggle-checkbox ml-5" />
                        </div>
                        <div className="flex items-center">
                            <img src={sair} className="w-6 h-6 ml-4" />
                            <a href="#" className="block py-2 px-4 text-red-600 hover:text-red-800 -ml-2">Sair</a>
                        </div>
                    </>
                )}
            </div>

            {!isOpen && (
                <button onClick={toggleSidebar} className="absolute left-2 top-2 text-black">
                    <img src={seta_direita} className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}

export default SideBar;
