import { Star, MapPin, CircleDollarSign, Circle } from "lucide-react";
import Pintor from "../img/pintor.jpg";
import TecnicoSeguranca from "../img/tecnicoSeguranca.jpg";
import Restauradora from "../img/restauradora.jpg";
import Pedreiro from "../img/pedreiro.jpg";
import Encanador from "../img/encanador.jpg";
import Decoradora from "../img/decoradoraFestas.jpg";

const TrendingServices = () => {
  const services = [
    {
      icon: (
        <img
          src={Pintor}
          alt="Imagem do Pintor"
          className="object-cover rounded-full object-[40%] shadow-xl w-20 h-20"
        />
      ),
      name: "Marcos Pereira",
      rate: 4.9,
      amount: 189,
      quote:
        "Transformamos seus espaços com pinturas de alta qualidade, trazendo cor e vida a cada ambiente.",
      localization: "8,7 km - São Paulo/SP",
      serviceValue: 250.0,
      accountLevel: "Prata",
    },

    {
      icon: (
        <img
          src={TecnicoSeguranca}
          alt="Imagem do Jardineiro"
          className="object-cover rounded-full object-[40%] shadow-xl w-20 h-20"
        />
      ),
      name: "Kleber dos Santos",
      rate: 4.2,
      amount: 243,
      quote:
        "Garantimos um ambiente seguro e conforme as normas, protegendo sua equipe e seu patrimônio.",
      localization: "1.3 km - Guarulhos/SP",
      serviceValue: 550.0,
      accountLevel: "Ouro",
    },

    {
      icon: (
        <img
          src={Restauradora}
          alt="Imagem da Restauradora"
          className="object-cover rounded-full object-[40%] shadow-xl w-20 h-20"
        />
      ),
      name: "Raquel Oliveira",
      rate: 4.9,
      amount: 189,
      quote:
        "Restauramos seu item com cuidado e precisão, devolvendo sua beleza original.",
      localization: "8,7 km - São Paulo/SP",
      serviceValue: 250.0,
      accountLevel: "Prata",
    },

    {
      icon: (
        <img
          src={Pedreiro}
          alt="Imagem do Pedreiro"
          className="object-cover rounded-full object-[40%] shadow-xl w-20 h-20"
        />
      ),
      name: "Jorge Amado",
      rate: 4.9,
      amount: 105,
      quote:
        "Construímos e reformamos com excelência, garantindo solidez e qualidade em cada projeto.",
      localization: "23.2 km - Natal/RN",
      serviceValue: 1200.0,
      accountLevel: "Bronze",
    },

    {
      icon: (
        <img
          src={Encanador}
          alt="Imagem do Encanador"
          className="object-cover rounded-full object-[40%] shadow-xl w-20 h-20"
        />
      ),
      name: "Mario Bros da Silva",
      rate: 4.7,
      amount: 192,
      quote:
        "Resolvemos seus problemas hidráulicos com eficiência, garantindo instalações e reparos duráveis e sem vazamentos.",
      localization: "9.1 km - São Paulo/SP",
      serviceValue: 475.0,
      accountLevel: "Diamante",
    },

    {
      icon: (
        <img
          src={Decoradora}
          alt="Imagem da Decoradora"
          className="object-cover rounded-full object-[40%] shadow-xl w-20 h-20"
        />
      ),
      name: "Juliana Paes",
      rate: 4.8,
      amount: 201,
      quote:
        "Transformamos seus ambientes com design único, criando espaços que refletem estilo e personalidade.",
      localization: "8 km - São Paulo/SP",
      serviceValue: 2300.0,
      accountLevel: "Ouro",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600 text-center">
          Serviços em Alta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white flex flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-in"
            >
              <div className="mx-auto">{service.icon}</div>

              <div className="flex flex-col h-full justify-between gap-8">
                <div className="flex flex-col gap-1">
                  <div className="w-full flex justify-between text-lg text-gray-800 font-bold">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.name}
                    </h3>
                    <div className="flex justify-center items-center">
                      <Star className="h-6 w-6 text-yellow-400 mr-1" />
                      <p className="text-xs text-gray-400 flex">
                        <span className="text-yellow-500 font-bold text-xl mr-1">
                          {service.rate}
                        </span>{" "}
                        {service.amount}
                      </p>
                    </div>
                  </div>
                  <blockquote className="italic text-xs text-gray-600 font-thin">
                    {service.quote}
                  </blockquote>
                </div>

                <div>
                  <ul id="infoServices">
                    <li className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <p className="text-gray-600 text-sm">
                        {service.localization}
                      </p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CircleDollarSign className="h-4 w-4 text-blue-500" />
                      <p className="text-gray-600 text-sm">
                        Valor médio de serviço: R${service.serviceValue}
                      </p>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Circle className="h-4 w-4 text-blue-500" />
                      <p className="text-gray-600 text-sm">
                        Nível: {service.accountLevel}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingServices;
