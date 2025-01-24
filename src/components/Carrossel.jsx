import chaveiro from '../img/chaveiro.jpg'
import dedetizador from '../img/dedetizador.jpg'
import faxineira from '../img/faxineira.jpg'
import eletricista from '../img/eletricista.jpg'
import pintor from '../img/pintor.jpg'

function Carrossel() {
    
    const swiper = new Swiper('.swiper', {
        loop: true,
        spacebetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 2000
        },
        speed: 2000,
        pagination: {
          dynamicBullets: true,
          clickable: true,
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
 
    return (
        <div class="swiper pt-20 w-full h-[calc(75vh-80px)] sm:h-[calc(75vh-80px)] md:h-[calc(90vh-80px)] lg:h-[calc(100vh-80px)]">
            <div class="swiper-wrapper flex z-1 relative w-full h-full">
                <div class="swiper-slide items-center justify-center"><img src={eletricista} alt="Eletricista" class='object-cover w-full h-full' /></div>
                <div class="swiper-slide items-center justify-center"><img src={chaveiro} alt="chaveiro" class='object-cover w-full h-full' /></div>
                <div class="swiper-slide items-center justify-center"><img src={dedetizador} alt="dedetizador" class='object-cover w-full h-full' /></div>
                <div class="swiper-slide items-center justify-center"><img src={faxineira} alt="faxineira" class='object-cover w-full h-full' /></div>
                <div class="swiper-slide items-center justify-center"><img src={pintor} alt="Pintor" class='object-cover w-full h-full' /></div>
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev pt-20"></div>
            <div class="swiper-button-next pt-20"></div>
        </div>
    )
}

export default Carrossel;