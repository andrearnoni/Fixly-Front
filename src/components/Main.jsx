import { FaStar } from "react-icons/fa";

function Main() {
    const swiper = new Swiper(".swiper", {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            dynamicBullets: true,
            clickable: true,
            el: '.swiper-pagination'
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 18,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 18,
            },
            1118: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });

    return (
        <main class="testimonials min-h-full bg-gray-200 flex items-center justify-center flex-col gap-14 pt-60 pb-8 pl-[8%] pr-[8%]">
            <h1 class="text-xl font-semibold text-gray-600">Como Funciona o FixLy?</h1>
            <p class="text-3xl font-semibold text-center text-gray-800 pb-8">O FixLy é a plataforma que conecta você com <span class="font-bold text-blue-600">profissionais qualificados</span> para diversos tipos de serviços, seja para <span class="font-bold text-blue-600">sua casa ou empresa.</span> Ao se cadastrar, você pode escolher entre ser um <span class="font-bold text-blue-600">prestador</span> de serviços ou um <span class="font-bold text-blue-600">cliente.</span></p>

            <div class="testimonials_header text-center">
                <h2 class="text-3xl font-semibold text-gray-800">Confiança e qualidade garantidas, com <span class="text-blue-600 font-bold">avaliações positivas</span> de quem já usou nossos serviços</h2>
            </div>

            <div class="swiper w-full h-80 pb-20">
                <div class="swiper-wrapper">
                    <div class="swiper-slide bg-white flex flex-col gap-4 justify-center p-8 rounded-xl shadow-[0_0_20px_0_rgba(92,115,160,0.07)]">
                        <div class="testimonial-rate flex gap-[2px] text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <blockquote class="testimonial-quote text-gray-500 text-base">
                        "Utilizei o site para encontrar uma profissional para limpar minha casa e foi uma excelente experiência. A plataforma é fácil de usar, e consegui rapidamente entrar em contato com profissionais qualificados. O serviço foi impecável e fiquei muito satisfeita."
                        </blockquote>

                        <div class="testimonial-author flex items-center gap-4">
                            <div class="author-info">
                                <h3 class="font-semibold text-sm text-gray-900">Maria S. - "Limpeza Doméstica"</h3>
                                <p class="text-xs text-gray-500">Cliente desde 2020</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide bg-white flex flex-col gap-4 justify-center p-8 rounded-xl shadow-[0_0_20px_0_rgba(92,115,160,0.07)]">
                        <div class="testimonial-rate flex gap-[2px] text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <blockquote class="testimonial-quote text-gray-500 text-base">
                        "Precisávamos de manutenção urgente nos computadores da nossa empresa. A plataforma facilitou muito a busca por técnicos e encontramos um profissional eficiente, que resolveu o problema rapidamente. O site é prático e confiável, com ótimo atendimento."
                        </blockquote>

                        <div class="testimonial-author">
                            <div class="author-info">
                                <h3 class="font-semibold text-sm text-gray-900">João M. - "Assistência Técnica Empresarial"</h3>
                                <p class="text-xs text-gray-500">Cliente desde 2022</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide swiper-slide bg-white flex flex-col gap-4 justify-center p-8 rounded-xl shadow-[0_0_20px_0_rgba(92,115,160,0.07)]">
                        <div class="testimonial-rate flex gap-[2px] text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <blockquote class="testimonial-quote text-gray-500 text-base">
                        "Busquei um consultor para melhorar a gestão dos processos na minha empresa e a experiência foi positiva. O profissional era qualificado e ofereceu boas soluções, mas o tempo de resposta inicial poderia ser um pouco mais rápido. No geral, o serviço foi excelente."
                        </blockquote>

                        <div class="testimonial-author">
                            <div class="author-info">
                                <h3 class="font-semibold text-sm text-gray-900">Laura P. - "Consultoria Empresarial"</h3>
                                <p class="text-xs text-gray-500">Cliente desde 2021</p>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide swiper-slide bg-white flex flex-col gap-4 justify-center p-8 rounded-xl shadow-[0_0_20px_0_rgba(92,115,160,0.07)]">
                        <div class="testimonial-rate flex gap-[2px] text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <blockquote class="testimonial-quote text-gray-500 text-base">
                        "Eu estava precisando de ajuda para cuidar do meu jardim e encontrei um jardineiro excelente através do site. O profissional foi pontual, fez um trabalho maravilhoso e ainda me deu dicas sobre como cuidar melhor das plantas. A plataforma é muito prática e eficiente."
                        </blockquote>

                        <div class="testimonial-author">
                            <div class="author-info">
                                <h3 class="font-semibold text-sm text-gray-900">Carlos T. - "Jardinagem"</h3>
                                <p class="text-xs text-gray-500">Cliente desde 2020</p>
                            </div>
                        </div>
                    </div><div class="swiper-slide swiper-slide bg-white flex flex-col gap-4 justify-center p-8 rounded-xl shadow-[0_0_20px_0_rgba(92,115,160,0.07)]">
                        <div class="testimonial-rate flex gap-[2px] text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <blockquote class="testimonial-quote text-gray-500 text-base">
                        "Encontrei uma cuidadora incrível para minha mãe, que tem Alzheimer. Ela é atenciosa, responsável e tem feito um trabalho excelente. Me sinto muito mais tranquila sabendo que minha mãe está bem cuidada. O site facilitou bastante a busca e foi fácil encontrar a profissional ideal."
                        </blockquote>

                        <div class="testimonial-author">
                            <div class="author-info">
                                <h3 class="font-semibold text-sm text-gray-900">Sofia G. - "Cuidados com Idosos"</h3>
                                <p class="text-xs text-gray-500">Cliente desde 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination-main"></div>

                <div class="swiper-button-prev left-0"></div>
                <div class="swiper-button-next right-0"></div>
            </div>
        </main>
    )
}

export default Main