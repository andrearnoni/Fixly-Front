import { useEffect } from "react";
import LinkLoading from "../components/LinkLoading";
import { Search } from "lucide-react";
import chaveiro from "../img/chaveiro.jpg";
import dedetizador from "../img/dedetizador.jpg";
import faxineira from "../img/faxineira.jpg";
import eletricista from "../img/eletricista.jpg";
import pintor from "../img/pintor.jpg";

function Carrossel() {
  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper(".swiper", {
        loop: true,
        effect: "fade",
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 2000,
        pagination: {
          dynamicBullets: true,
          clickable: true,
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }, []);

  return (
    <div className="swiper flex items-center justify-center w-full h-[calc(100vh-80px)]">
      <div className="swiper-wrapper relative w-full h-full">
        {[eletricista, chaveiro, dedetizador, faxineira, pintor].map(
          (img, index) => (
            <div
              key={index}
              className="swiper-slide relative flex items-center justify-center"
            >
              <img
                src={img}
                alt="Serviço"
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r from-black/80 to-transparent"></div>
            </div>
          )
        )}
      </div>
      <div className="swiper-pagination"></div>
      <div className="absolute inset-0 z-10 flex items-center px-6 pt-20 sm:pt-24 md:pt-28 lg:px-16">
        <div className="text-left max-w-lg sm:max-w-xl md:max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Encontre os melhores
            <span className="block text-[#07AFFF]">profissionais</span>
          </h1>
          <p className="mb-6 text-sm sm:text-base text-gray-100 text-balance font-bold">
            Conectamos você aos melhores profissionais qualificados para
            realizar seus serviços com excelência e segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <LinkLoading
              to="/login"
              className="flex items-center justify-center gap-2
              rounded-xl bg-gradient-to-r from-[#07AFFF] to-[#0470AE] px-4 py-2 text-sm font-semibold text-white
              transition-colors hover:from-[#058EDC] hover:to-[#03598A] w-[230px] sm:w-auto"
            >
              <Search className="h-5 w-5" />
              Encontrar profissionais
            </LinkLoading>
            <LinkLoading
              to="/cadastro"
              className="rounded-xl text-center border border-white px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 w-[230px] sm:w-auto"
            >
              Seja um profissional
            </LinkLoading>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carrossel;
