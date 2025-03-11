import React, { useEffect, useState } from 'react';
import data from '../data/data.json'
import UserIcon from "../img/user.png"
import { MessageCircle, ChevronsUp, ChevronsDown } from "lucide-react"

const MultiFilters = () => {
    const [selectedFilters, setSelectedFilters] = useState([])
    const [filteredItems, setFilteredItems] = useState(data)

    let filters = ['Pedreiro', 'Pintor', 'Encanador', 'Eletricista', 'Jardineiro', 'Faxineiro', 'Marceneiro']

    const handleFiltersButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory)
            setSelectedFilters(filters)
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory])
        }
    }

    useEffect(() => {
        filterItems()
    }, [selectedFilters])

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = data.filter((item) => item.categoria === selectedCategory)
                return temp
            })
            setFilteredItems(tempItems.flat())
        } else {
            setFilteredItems([...data])
        }
    }

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='max-w-screen'>
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFiltersButtonClick(category)}
                        className={`bg-blue-200 rounded-lg p-2 m-2 text-gray-800 font-semibold hover:bg-blue-300 hover:shadow-[3px_3px_0px_0px_rgba(37,99,235)] transition-all duration-200 ease-in-out ${selectedFilters?.includes(category) ? 'bg-blue-500 text-blue-100' : ''
                            }`}
                        key={`filters ${idx}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-10'>
                    {filteredItems.map((profissionals, index) => (
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
    )
}

export default MultiFilters