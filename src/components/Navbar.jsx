import { useContext, useState } from "react";
import { Context } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import LinkLoading from "../components/LinkLoading";
import logo from "../img/logo2.png";
import avatar from "../img/avatar.png"

function Navbar({ showItems, showUser }) {
  const { isLoading } = useContext(Context);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={
        isLoading
          ? "hidden"
          : "bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200"
      }
    >

      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to="#" className="flex items-center">
          <img src={logo} alt="Logo FixLy" className="h-11" />
        </Link>

        {showItems && (
          <>
            <div className="flex items-center space-x-3 md:order-2">
              <LinkLoading
                to="/cadastro"
                className="block py-2 px-3 text-gray-900 rounded hover:text-blue-400"
                aria-current="page"
              >
                Cadastrar
              </LinkLoading>
              <LinkLoading
                to="/login"
                className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none font-medium rounded-xl text-sm px-4 py-2"
              >
                Entrar
              </LinkLoading>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400"
                    onClick={() => handleScrollToSection("comoFunciona")}
                  >
                    Como Funciona?
                  </Link>
                </li>
                <li>
                  <Link
                    to="#inicio"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="#servicos"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    to="#contato"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

      {showUser && (
        <button id="avatar-btn" aria-haspopup="true" aria-label="Menu da conta" className="bg-sky-100 rounded-full p-2 border-solid border-sky-600 border-2">
          <img src={avatar} alt="Foto Avatar" className="h-8 w-8 rounded-full" />
        </button>
      )}
      </div>

    </nav>
  );
}

export default Navbar;
