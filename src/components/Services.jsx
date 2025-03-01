import data from "../data/data.json"
import { MessageCircle } from "lucide-react"


const Services = () => {
    const profissionals = data
    const actualDate = new Date().getFullYear()
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-6">
                {profissionals.map((profissionals, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden bg-white">
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg text-center mb-2">
                                {profissionals.slogan}
                            </div>
                            <p className="text-gray-700 text-xs">{profissionals.name},</p>
                            <p className="text-gray-700 text-xs">{profissionals.category}</p>
                            <p className="text-gray-700 text-xs">{profissionals.rate}</p>
                            <p className="text-gray-700 text-xs">{profissionals.register}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <button className="px-4 py-2">
                                <MessageCircle className="text-blue-500 hover:text-blue-700"/>
                            </button>
                        </div>
                        <div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services