import { useState } from "react";
import {
  CreditCard,
  Calendar,
  Lock,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const PaymentForm = ({ onSubmit, isProcessing }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [showInstallments, setShowInstallments] = useState(false);
  const [installment, setInstallment] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="bg-white sm:rounded-xl sm:shadow-lg p-6 md:p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Método de Pagamento
      </h2>

      <div className="flex space-x-4 mb-8">
        <button
          type="button"
          onClick={() => setPaymentMethod("credit")}
          className={`flex-1 py-3 px-4 rounded-lg border ${
            paymentMethod === "credit"
              ? "border-[#07AFFF] bg-blue-50 text-[#0470AE]"
              : "border-gray-300 text-gray-600 hover:bg-gray-50"
          } font-medium transition duration-150 flex items-center justify-center`}
        >
          <CreditCard className="h-5 w-5 mr-2" />
          Cartão
        </button>

        <button
          type="button"
          onClick={() => setPaymentMethod("pix")}
          className={`flex-1 py-3 px-4 rounded-lg border ${
            paymentMethod === "pix"
              ? "border-[#07AFFF] bg-blue-50 text-[#0470AE]"
              : "border-gray-300 text-gray-600 hover:bg-gray-50"
          } font-medium transition duration-150 flex items-center justify-center`}
        >
          <svg
            className="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12L12 20L20 12L12 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          PIX
        </button>

        <button
          type="button"
          onClick={() => setPaymentMethod("boleto")}
          className={`flex-1 py-3 px-4 rounded-lg border ${
            paymentMethod === "boleto"
              ? "border-[#07AFFF] bg-blue-50 text-[#0470AE]"
              : "border-gray-300 text-gray-600 hover:bg-gray-50"
          } font-medium transition duration-150 flex items-center justify-center`}
        >
          <svg
            className="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="3"
              y1="10"
              x2="21"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          Boleto
        </button>
      </div>

      {paymentMethod === "credit" && (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="cardName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome no Cartão
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="cardName"
                placeholder="Como está no cartão"
                className="pl-10 w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07AFFF] focus:border-[#07AFFF]"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Número do Cartão
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CreditCard className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="cardNumber"
                placeholder="0000 0000 0000 0000"
                className="pl-10 w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07AFFF] focus:border-[#07AFFF]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Data de Validade
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/AA"
                  className="pl-10 w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07AFFF] focus:border-[#07AFFF]"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Código de Segurança
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="cvv"
                  placeholder="CVV"
                  className="pl-10 w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07AFFF] focus:border-[#07AFFF]"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <button
              type="button"
              onClick={() => setShowInstallments(!showInstallments)}
              className="w-full flex items-center justify-between py-3 px-4 border border-gray-300 rounded-lg text-left hover:border-[#07AFFF] transition-colors"
            >
              <span className="text-gray-700 font-medium">
                Parcelamento:{" "}
                {installment === "1"
                  ? "À vista"
                  : `${installment}x de R$ ${(
                      299.99 / parseInt(installment)
                    ).toFixed(2)}`}
              </span>
              {showInstallments ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {showInstallments && (
              <div className="mt-2 border border-gray-300 rounded-lg overflow-hidden">
                <div className="max-h-48 overflow-y-auto">
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => {
                        setInstallment(num.toString());
                        setShowInstallments(false);
                      }}
                      className={`w-full text-left py-2 px-4 hover:bg-gray-50 ${
                        installment === num.toString()
                          ? "bg-blue-50 text-[#0470AE]"
                          : "text-gray-700"
                      }`}
                    >
                      {num === 1
                        ? "À vista - R$ 299,99"
                        : `${num}x de R$ ${(299.99 / num).toFixed(
                            2
                          )} - Total: R$ 299,99`}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-4 px-4 rounded-lg font-medium text-white ${
              isProcessing
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#07AFFF] to-[#0470AE] hover:from-[#058EDC] hover:to-[#03598A] transition-all duration-300 hover:scale-[1.02]"
            }`}
          >
            {isProcessing ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processando...
              </>
            ) : (
              "Finalizar Pagamento"
            )}
          </button>
        </form>
      )}

      {paymentMethod === "pix" && (
        <div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 text-center">
            <div className="mb-4">
              <div className="inline-block p-4 bg-white rounded-lg border border-gray-200">
                <svg
                  className="h-32 w-32"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="10"
                    width="180"
                    height="180"
                    rx="10"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path d="M40 40H60V60H40V40Z" fill="black" />
                  <path d="M70 40H90V60H70V40Z" fill="black" />
                  <path d="M110 40H130V60H110V40Z" fill="black" />
                  <path d="M140 40H160V60H140V40Z" fill="black" />
                  <path d="M40 70H60V90H40V70Z" fill="black" />
                  <path d="M100 70H120V90H100V70Z" fill="black" />
                  <path d="M140 70H160V90H140V70Z" fill="black" />
                  <path d="M40 100H60V120H40V100Z" fill="black" />
                  <path d="M70 100H90V120H70V100Z" fill="black" />
                  <path d="M100 100H120V120H100V100Z" fill="black" />
                  <path d="M140 100H160V120H140V100Z" fill="black" />
                  <path d="M40 130H60V150H40V130Z" fill="black" />
                  <path d="M70 130H90V150H70V130Z" fill="black" />
                  <path d="M100 130H120V150H100V130Z" fill="black" />
                  <path d="M140 130H160V150H140V130Z" fill="black" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Escaneie o código QR com o aplicativo do seu banco
            </p>
            <div className="flex justify-center mb-4">
              <button className="text-[#07AFFF] hover:text-[#0470AE] text-sm font-medium flex items-center transition-colors">
                <svg
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 16V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V16M4 8V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 4V20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Copiar código PIX
              </button>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-[#07AFFF]">
              <p className="text-xs text-[#0470AE]">
                O pagamento será confirmado em até 30 segundos após a
                transferência
              </p>
            </div>
          </div>

          <button
            onClick={onSubmit}
            disabled={isProcessing}
            className={`w-full py-4 px-4 rounded-lg font-medium text-white ${
              isProcessing
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#07AFFF] to-[#0470AE] hover:from-[#058EDC] hover:to-[#03598A] transition-all duration-300 hover:scale-[1.02]"
            }`}
          >
            {isProcessing ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processando...
              </>
            ) : (
              "Finalizar Pagamento"
            )}
          </button>
        </div>
      )}

      {paymentMethod === "boleto" && (
        <div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800">Valor do Boleto</h3>
              <span className="font-bold text-gray-900">R$ 299,99</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800">Vencimento</h3>
              <span className="font-medium text-gray-900">
                {new Date(
                  Date.now() + 3 * 24 * 60 * 60 * 1000
                ).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-gray-800">Código de barras</h3>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                <svg
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 16V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V16M4 8V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 4V20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Copiar
              </button>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4">
              <p className="text-xs text-gray-600 font-mono break-all">
                34191.79001 01043.510047 91020.150008 9 87770026000
              </p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
              <p className="text-xs text-indigo-800">
                O boleto será enviado para o seu e-mail. Após o pagamento, a
                confirmação pode levar até 3 dias úteis.
              </p>
            </div>
          </div>

          <button
            onClick={onSubmit}
            disabled={isProcessing}
            className={`w-full py-4 px-4 rounded-lg font-medium text-white ${
              isProcessing
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#07AFFF] to-[#0470AE] hover:from-[#058EDC] hover:to-[#03598A] transition-all duration-300 hover:scale-[1.02]"
            }`}
          >
            {isProcessing ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Gerando boleto...
              </>
            ) : (
              "Gerar Boleto"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
