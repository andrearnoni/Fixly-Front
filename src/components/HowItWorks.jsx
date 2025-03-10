import {
  Calendar,
  CheckCircle,
  Home,
  MessageSquare,
  Search,
  User,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 mb-4 text-[#07AFFF]" />,
      title: "Escolha o serviço",
      description:
        "Selecione o tipo de serviço que você precisa entre nossa variedade de profissionais qualificados",
    },
    {
      icon: <Calendar className="w-8 h-8 mb-4 text-[#07AFFF]" />,
      title: "Agende uma data",
      description:
        "Escolha o melhor dia e horário para receber o profissional em sua casa ou empresa",
    },
    {
      icon: <User className="w-8 h-8 mb-4 text-[#07AFFF]" />,
      title: "Profissional ideal",
      description:
        "Selecionamos o melhor profissional próximo a você, com experiência comprovada",
    },
    {
      icon: <Home className="w-8 h-8 mb-4 text-[#07AFFF]" />,
      title: "Serviço realizado",
      description:
        "O profissional vai até você e realiza o serviço com qualidade e garantia",
    },
    {
      icon: <CheckCircle className="w-8 h-8 mb-4 text-[#07AFFF]" />,
      title: "Avalie o serviço",
      description:
        "Após a conclusão, avalie o profissional e nos ajude a manter o alto padrão",
    },
    {
      icon: <MessageSquare className="w-8 h-8 mb-4 text-[#07AFFF]" />,
      title: "Suporte contínuo",
      description:
        "Conte com nossa equipe para qualquer necessidade durante todo o processo",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-white" id="comoFunciona">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">
            Como funciona a{" "}
            <span className="text-[#07AFFF] font-bold">fixLy?</span>{" "}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Em poucos cliques conectamos você aos melhores profissionais de
            diversos tipos de serviços, seja para sua casa ou empresa. Veja como
            é simples:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-in"
            >
              <div className="flex flex-col items-center text-center">
                {step.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
