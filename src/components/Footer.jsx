import React from "react";
import logo from "../img/logo2.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import tiktok from "../img/tiktok.png";
import linkedin from "../img/linkedin.png";
import twitter from "../img/twitter.png";
import pinterest from "../img/pinterest.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Categorias",
      links: [
        "Construção",
        "Manutenção",
        "Limpeza",
        "Dedetização",
        "Pintura",
        "Instalação",
        "Beleza",
      ],
    },
    {
      title: "Para cliente",
      links: [
        "Como usar a fixLy",
        "Meu perfil",
        "Ver depoimentos",
        "Fazer meu cadastro",
      ],
    },
    {
      title: "Para profissionais",
      links: ["Sou profissional", "Serviços", "Fazer meu cadastro"],
    },
    {
      title: "fixLy",
      links: [
        "Quem somos",
        "Política de privacidade",
        "Termos de uso",
        "Fale conosco",
      ],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-6 px-4 transition-all duration-300 ease-in-out">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-left">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li className="text-left" key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-900 hover:text-[#07AFFF] transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="fixLy logo" className="h-8" />
              <span className="text-gray-600 text-sm">
                © fixLy todos os direitos reservados {currentYear}
              </span>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-transform duration-300 ease-in-out hover:scale-[1.12]"
              >
                <img src={facebook} className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-transform duration-300 ease-in-out hover:scale-[1.12]"
              >
                <img src={instagram} className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-transform duration-300 ease-in-out hover:scale-[1.12]"
              >
                <img src={tiktok} className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-transform duration-300 ease-in-out hover:scale-[1.12]"
              >
                <img src={linkedin} className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-transform duration-300 ease-in-out hover:scale-[1.12]"
              >
                <img src={twitter} className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-transform duration-300 ease-in-out hover:scale-[1.12]"
              >
                <img src={pinterest} className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
