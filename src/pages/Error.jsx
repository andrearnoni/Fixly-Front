import React from "react";

function Error() {
  return (
    <div class="flex items-center justify-center h-screen px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-6xl font-semibold text-blue-500">404</p>
        <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Página não encontrada
        </h1>
        <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Desculpe, mas nem os nossos profissionais conseguiram encontrar o que
          você estava procurando.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            class="bg-blue-500 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 rounded focus:outline-none focus:shadow-outline"
          >
            Voltar para a página principal
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;
