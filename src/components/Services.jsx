import data from "../data/data.json"
import UserIcon from "../img/user.png"
import { MessageCircle, ChevronsUp, ChevronsDown } from "lucide-react"


const Services = () => {
    const profissionals = data
    return (
        <article className="mt-10 px-6 md:px-8" id="services">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    
                    {profissionals.map((profissionals, index) => (
                        <div key={index} className="bg-white flex flex-col rounded shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-in">
                            <div className="px-4 py-4 h-full flex flex-col justify-between">
                                <div className="font-bold text-base line-clamp-none sm:line-clamp-3">
                                    "{profissionals.descricao}"
                                </div>
                                <div className="grid grid-cols-2 text-center">
                                    <p className="text-gray-700 text-sm col-span-2">{profissionals.nome},</p>
                                    <p className="text-gray-700 text-sm font-bold flex flex-col items-center">
                                        <ChevronsUp className="text-red-500" />
                                        {profissionals.precoMaximo}</p>
                                    <p className="text-gray-700 text-sm font-bold flex flex-col items-center">
                                        <ChevronsDown className="text-blue-500" />
                                        {profissionals.precoMinimo}
                                    </p>
                                    <p className="text-gray-700 text-sm">{profissionals.categoria}</p>
                                    <p className="text-gray-700 text-sm">{profissionals.prestador}</p>
                                </div>
                            </div>
                            <div className="px-6 pb-6 flex justify-around">
                                <button type="button">
                                    <img src={UserIcon} alt="Ícone de usuário" className="h-6 w-6" />
                                </button>
                                <button type="button">
                                    <MessageCircle className="text-blue-500 hover:text-blue-700" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default Services