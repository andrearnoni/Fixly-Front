import { useEffect, useState } from "react";

const testimonials = [
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    name: "Maria Silva",
    location: "São Paulo - SP",
    text: `"Eu estava precisando de ajuda para cuidar do meu jardim e
              encontrei um jardineiro excelente através do site. O profissional
              foi pontual, fez um trabalho maravilhoso e ainda me deu dicas
              sobre como cuidar melhor das plantas. A plataforma é muito prática
              e eficiente."`,
    stars: 4.5,
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
    name: "Elisandra Marques",
    location: "Florianópolis - SC",
    text: `"Encontrei uma cuidadora incrível para minha mãe, que tem
              Alzheimer. Ela é atenciosa, responsável e tem feito um trabalho
              excelente. Me sinto muito mais tranquila sabendo que minha mãe
              está bem cuidada. O site facilitou bastante a busca e foi fácil
              encontrar a profissional ideal."`,
    stars: 5,
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
    name: "João Pedro",
    location: "Bahia - BA",
    text: `"Busquei um consultor para melhorar a gestão dos processos na
              minha empresa e a experiência foi positiva. O profissional era
              qualificado e ofereceu boas soluções, mas o tempo de resposta
              inicial poderia ser um pouco mais rápido. No geral, o serviço foi
              excelente."`,
    stars: 4,
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp",
    name: "Lucas Souza",
    location: "Curitiba - PR",
    text: `"A experiência com o site foi fantástica. Consegui encontrar um
              advogado especializado que me ajudou em um processo complicado. O
              atendimento foi excepcional e a plataforma foi fácil de navegar."`,
    stars: 4,
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp",
    name: "Ana Paula",
    location: "Rio de Janeiro - RJ",
    text: `"Usei o site para encontrar um personal trainer e não me arrependo.
              O profissional foi muito atencioso e fez um plano de treino personalizado
              para minhas necessidades. O site tem uma interface muito amigável e
              fácil de usar."`,
    stars: 5,
  },
  {
    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp",
    name: "Mariana Almeida",
    location: "Belo Horizonte - MG",
    text: `"Precisava de uma assessoria financeira para minha empresa e encontrei
              um consultor excelente. Ele me ajudou a melhorar a gestão dos meus
              negócios e a alcançar resultados mais rápidos. A plataforma foi fácil
              e eficiente."`,
    stars: 4.5,
  },
];

function Reviews() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    if (typeof window !== "undefined" && window.AOS && isSmallScreen) {
      window.AOS.init();
    }

    if (isLargeScreen) {
      const Swiper = window.Swiper;
      new Swiper(".reviews-swiper-container", {
        slidesPerView: 3,
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 1500,
        },
        speed: 2000,
        pagination: {
          dynamicBullets: true,
          el: ".reviews-swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".reviews-swiper-button-next",
          prevEl: ".reviews-swiper-button-prev",
        },
        on: {
          slideChange: function () {
            document.body.style.overflowX = "hidden";
          },
        },
      });
    }

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isSmallScreen, isLargeScreen]);

  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <ion-icon
            key={i}
            name="star"
            style={{ color: "#facc15", fontSize: "1.25rem" }}
          ></ion-icon>
        ))}
        {halfStar && (
          <ion-icon
            name="star-half"
            style={{ color: "#facc15", fontSize: "1.25rem" }}
          ></ion-icon>
        )}
        {[...Array(5 - Math.ceil(stars))].map((_, i) => (
          <ion-icon
            key={i + fullStars}
            name="star-outline"
            style={{ color: "#facc15", fontSize: "1.25rem" }}
          ></ion-icon>
        ))}
      </>
    );
  };

  return (
    <section className="py-16 px-6 bg-gray-50" id="testemunhos">
      <div className="max-w-7xl pb-12 mx-auto text-center text-balance">
        <h2 className="text-3xl font-semibold text-gray-800">
          Confiança e qualidade garantidas, com{" "}
          <span className="text-[#07AFFF] font-bold">avaliações positivas</span>{" "}
          de quem já usou nossos serviços
        </h2>
      </div>
      {isLargeScreen ? (
        <div
          className="reviews-swiper-container swiper-container"
          style={{
            overflowX: "hidden",
            position: "relative",
            paddingBottom: "60px",
          }}
        >
          <div className="swiper-wrapper" style={{ display: "flex" }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="swiper-slide"
                style={{
                  width: "33.3333%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="max-w-sm bg-white shadow-md rounded-lg p-6 border border-black min-h-[400px] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="rounded-full shadow-lg"
                        width="150"
                        height="150"
                      />
                    </div>
                    <h5 className="text-lg font-bold text-gray-800 text-center">
                      {testimonial.name}
                    </h5>
                    <h6 className="text-sm text-[#07AFFF] text-center mb-4">
                      {testimonial.location}
                    </h6>
                    <p className="text-gray-600 text-center text-sm px-3 md:px-6 line-clamp-4">
                      {testimonial.text}
                    </p>
                  </div>
                  <ul className="list-unstyled flex justify-center mb-0 mt-4">
                    {renderStars(testimonial.stars)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="reviews-swiper-button-next swiper-button-next"></div>
          <div className="reviews-swiper-button-prev swiper-button-prev"></div>
          <div
            className="reviews-swiper-pagination swiper-pagination"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          ></div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 items-center md:flex-row md:flex-wrap md:justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-sm bg-white shadow-md rounded-lg p-6 border border-black"
              data-aos={
                isSmallScreen
                  ? index % 2 === 0
                    ? "fade-right"
                    : "fade-left"
                  : undefined
              }
              data-aos-duration="1500"
              style={{ overflowX: "hidden" }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-full shadow-lg"
                  width="150"
                  height="150"
                />
              </div>
              <h5 className="text-lg font-bold text-gray-800 text-center">
                {testimonial.name}
              </h5>
              <h6 className="text-sm text-blue-500 text-center mb-4">
                {testimonial.location}
              </h6>
              <p className="text-gray-600 text-center text-sm px-3 md:px-6">
                {testimonial.text}
              </p>
              <ul className="list-unstyled flex justify-center mb-0 mt-4">
                {renderStars(testimonial.stars)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
