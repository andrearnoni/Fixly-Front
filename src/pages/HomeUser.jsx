import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { Context } from "../context/GlobalContext";
import { Star, MapPin, CircleDollarSign, Circle } from "lucide-react";
import  Pintor  from "../img/pintor.jpg"
function HomeUser() {

    const { isLoggedIn } = useContext(Context)
    const [showItems, setShowItems] = useState(false);
    const [showUser, setShowUser] = useState(true);
    
    return (
        <>
            <Navbar showItems={showItems} showUser={showUser}/>

            <div id="services" className="pt-40 w-full flex flex-col gap-32">
                <div className="text-xl pl-20">
                    <h2>Escolha um serviço</h2>
                    <div className="carrossel"></div>
                </div>

                <div className="bg-white w-full pl-20 pt-10 pb-10">
                    <h2 className="text-xl text-gray-800 font-bold">Serviços em Alta</h2>

                    <div className="h-96 flex">

                        <div className="bg-gray-100 w-96 h-32 flex items-center rounded-xl shadow-lg">

                            <div className="w-1/3 h-full flex justify-center items-center p-4">
                                <img src={Pintor} alt="Imagem do Pintor" className="w-full h-full object-cover rounded-xl object-[40%] shadow-xl" />
                            </div>

                            <div className="flex flex-col w-2/3 h-full justify-around">
                                <div className="flex flex-col">
                                    <div className="w-full flex justify-between text-lg pr-4 text-gray-800 font-bold">
                                        <h3>Fulano de Tal</h3>
                                        <div className="flex">
                                            <Star className="h-4 w-4 text-yellow-400"/>
                                            <p className="text-xs text-gray-400"><span className="text-yellow-500 font-bold text-base">4,9</span> (187)</p>
                                        </div>
                                    </div>
                                    <blockquote className="italic text-xxs text-gray-400 pr-4 font-thin">
                                        “Posso te surpreender com certeza!!! Faço um serviço de pintura de assim e também assim.”
                                    </blockquote>
                                </div>

                                <div>
                                    <ul className="leading-loose font-thin">
                                        <li className="flex items-center space-x-3">
                                            <MapPin className="h-4 w-4 text-blue-500"/>
                                            <p className="text-xs text-gray-500">8,7 km - São Paulo/SP</p>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <CircleDollarSign className="h-4 w-4 text-blue-500" />
                                            <p className="text-xs text-gray-500">Valor médio de serviço: R$250,00</p>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <Circle className="h-4 w-4 text-blue-500" />
                                            <p className="text-xs text-gray-500">Nível: Prata</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default HomeUser