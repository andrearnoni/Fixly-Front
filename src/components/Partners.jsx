import madeira from "../img/madeira.png";
import casaCenter from "../img/casaCenter.png";
import casaGrande from "../img/casaGrande.png";
import construTudo from "../img/construTudo.png";
import leroy from "../img/leroy.png";
import pacheco from "../img/pacheco.png";
import plaslimp from "../img/plaslimp.png";
import telhanorte from "../img/telhanorte.png";

const Partners = () => {
  const partners = [
    {
      name: "Madeira Madeira",
      logo: madeira,
    },
    {
      name: "Casa Center",
      logo: casaCenter,
    },
    {
      name: "Casa Grande",
      logo: casaGrande,
    },
    {
      name: "Leroy Merlin",
      logo: leroy,
    },
    {
      name: "ConstruTudo",
      logo: construTudo,
    },
    {
      name: "Pacheco e Lacerda",
      logo: pacheco,
    },
    {
      name: "Telha Norte",
      logo: telhanorte,
    },
    {
      name: "Plaslimp",
      logo: plaslimp,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
          Parceiros que{" "}
          <span className="text-[#07AFFF] font-bold">
            confiam em nossos serviços
          </span>{" "}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
