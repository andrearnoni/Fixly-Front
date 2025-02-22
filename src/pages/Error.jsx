import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex items-center justify-center h-screen px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-6xl font-semibold text-[#07AFFF]">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Página não encontrada
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Desculpe, mas nem os nossos profissionais conseguiram encontrar o que
          você estava procurando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="text-white bg-gradient-to-r from-[#07AFFF] to-[#0470AE] transition-colors hover:from-[#058EDC] hover:to-[#03598A] focus:outline-none font-semibold rounded-xl text-sm px-4 py-2"
          >
            Voltar para a página principal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
