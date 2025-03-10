import Services from "../components/Services"
import MultiFilters from "./MultiFilters"

function SearchAService() {

    return (
        <section className="py-16 px-6 md:px-8" id="buscaServico">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600 text-center">Busque um serviço</h2>
            <div>
                <MultiFilters />
            </div>
        </section>
    )
}

export default SearchAService