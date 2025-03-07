import { useState } from "react";
import { ChevronDown, ChevronUp, Wrench, Tag, Calendar } from "lucide-react";

const OrderSummary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toLowerCase() === "desconto10") {
      setPromoApplied(true);
    }
  };

  return (
    <div className="bg-white sm:rounded-xl sm:shadow-lg p-6 md:p-8 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Resumo do Pedido</h2>
        <button
          className="lg:hidden block text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      <div className={`${isOpen || "lg:block hidden"}`}>
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">
              <Wrench className="h-6 w-6 text-[#07AFFF]" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                Serviço de Manutenção
              </h3>
              <p className="text-sm text-gray-500">
                Agendado para 25/03/2025 às 14:00
              </p>
            </div>
            <div className="ml-auto">
              <span className="font-medium text-gray-800">R$ 299,99</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleApplyPromo} className="mb-6">
          <label
            htmlFor="promoCode"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cupom de Desconto
          </label>
          <div className="flex space-x-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="promoCode"
                placeholder="Código do cupom"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="pl-10 w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07AFFF] focus:border-[#07AFFF]"
              />
            </div>
            <button
              type="submit"
              className="py-3 px-4 bg-gradient-to-r from-[#07AFFF] to-[#0470AE] hover:from-[#058EDC] hover:to-[#03598A] text-white font-medium rounded-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Aplicar
            </button>
          </div>
          {promoApplied && (
            <p className="mt-2 text-sm text-green-600">
              Cupom DESCONTO10 aplicado com sucesso!
            </p>
          )}
        </form>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-gray-800">R$ 299,99</span>
          </div>
          {promoApplied && (
            <div className="flex justify-between">
              <span className="text-gray-600">Desconto (10%)</span>
              <span className="font-medium text-green-600">-R$ 30,00</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600">Impostos</span>
            <span className="font-medium text-gray-800">Inclusos</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-gray-600 mr-1">Agendamento</span>
              <Calendar className="h-4 w-4 text-[#07AFFF]" />
            </div>
            <span className="font-medium text-gray-800">Confirmado</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-gray-800">Total</span>
            <span className="text-xl font-bold text-[#0470AE]">
              {promoApplied ? "R$ 269,99" : "R$ 299,99"}
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Ao finalizar a compra, você concorda com nossos Termos de Serviço e
            Política de Privacidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
