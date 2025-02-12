import logo from '../img/FixLy.png'
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import tiktok from '../img/tiktok.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';
import pinterest from '../img/pinterest.png';

function Footer() {
    return (
        <footer className="bg-[#f2f2f2] p-8 border-t border-gray-300">
            <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
                <div className="min-w-[200px]">
                    <h3 className="text-lg font-semibold text-black mb-3">Categorias</h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                        <li><a href="#" className="hover:text-black">Alimentação</a></li>
                        <li><a href="#" className="hover:text-black">Transporte</a></li>
                        <li><a href="#" className="hover:text-black">E-commerce</a></li>
                        <li><a href="#" className="hover:text-black">Desenvolvimento de site</a></li>
                        <li><a href="#" className="hover:text-black">Desenvolvimento de app</a></li>
                        <li><a href="#" className="hover:text-black">Turismo</a></li>
                        <li><a href="#" className="hover:text-black">Educação</a></li>
                        <li><a href="#" className="hover:text-black">Financeiro</a></li>
                        <li><a href="#" className="hover:text-black">Social</a></li>
                        <li><a href="#" className="hover:text-black">Entretenimento</a></li>
                        <li><a href="#" className="hover:text-black">Imobiliário</a></li>
                    </ul>
                </div>

                <div className="min-w-[200px]">
                    <h3 className="text-lg font-semibold text-black mb-3">Para cliente</h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                        <li><a href="#" className="hover:text-black">Como usar a FixLy</a></li>
                        <li><a href="#" className="hover:text-black">Meu perfil</a></li>
                        <li><a href="#" className="hover:text-black">Categoria x</a></li>
                        <li><a href="#" className="hover:text-black">Ver depoimentos</a></li>
                        <li><a href="#" className="hover:text-black">Fazer meu cadastro</a></li>
                        <li><a href="#" className="hover:text-black">Segurança e rapidez</a></li>
                        <li><a href="#" className="hover:text-black">Melhores serviços</a></li>
                        <li><a href="#" className="hover:text-black">Categoria A</a></li>
                    </ul>
                </div>

                <div className="min-w-[200px]">
                    <h3 className="text-lg font-semibold text-black mb-3">Para profissionais</h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                        <li><a href="#" className="hover:text-black">Sou profissional</a></li>
                        <li><a href="#" className="hover:text-black">Serviços</a></li>
                        <li><a href="#" className="hover:text-black">Mapa de sucesso</a></li>
                        <li><a href="#" className="hover:text-black">Outros profissionais</a></li>
                        <li><a href="#" className="hover:text-black">Fazer meu cadastro</a></li>
                        <li><a href="#" className="hover:text-black">Segurança e rapidez</a></li>
                        <li><a href="#" className="hover:text-black">Como atrair clientes</a></li>
                    </ul>
                </div>

                <div className="min-w-[200px]">
                    <h3 className="text-lg font-semibold text-black mb-3">FixLy</h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                        <li><a href="#" className="hover:text-black">Quem somos</a></li>
                        <li><a href="#" className="hover:text-black">Nossa história</a></li>
                        <li><a href="#" className="hover:text-black">Política de privacidade</a></li>
                        <li><a href="#" className="hover:text-black">Termos de uso</a></li>
                        <li><a href="#" className="hover:text-black">Ajuda e suporte</a></li>
                        <li><a href="#" className="hover:text-black">Fale conosco</a></li>
                        <li><a href="#" className="hover:text-black">Redes sociais</a></li>
                        <li><a href="#" className="hover:text-black">Outra categoria</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-300 pt-4 text-gray-600 text-sm">
                <span className="flex items-center">
                    <img src={logo} alt="FixLy logo" className="h-8 mr-2"/>
                    &copy; FixLy todos os direitos reservados 2025
                </span>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#"><img src={facebook} alt="Facebook" className="h-6 hover:scale-110 transition-transform"/></a>
                    <a href="#"><img src={instagram} alt="Instagram" className="h-6 hover:scale-110 transition-transform"/></a>
                    <a href="#"><img src={tiktok} alt="TikTok" className="h-6 hover:scale-110 transition-transform"/></a>
                    <a href="#"><img src={linkedin} alt="LinkedIn" className="h-6 hover:scale-110 transition-transform"/></a>
                    <a href="#"><img src={twitter} alt="Twitter/X" className="h-6 hover:scale-110 transition-transform"/></a>
                    <a href="#"><img src={pinterest} alt="Pinterest" className="h-6 hover:scale-110 transition-transform"/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
