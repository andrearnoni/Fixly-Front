import { useState } from "react";
import { Lock, CheckCircle, AlertCircle } from "lucide-react";
import Visa from "../img/visa.jpeg";
import Mastercard from "../img/mastercard.jpeg";
import Elo from "../img/elo.jpeg";
import American from "../img/american.jpeg";
import PaymentForm from "../components/PaymentForm";
import OrderSummary from "../components/OrderSummary";

function App() {
  const [paymentStatus, setPaymentStatus] = useState("idle");

  const handlePaymentSubmit = () => {
    setPaymentStatus("processing");

    setTimeout(() => {
      const isSuccess = Math.random() < 0.9;
      setPaymentStatus(isSuccess ? "success" : "error");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
      {paymentStatus === "success" ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white sm:rounded-xl sm:shadow-xl max-w-md w-full p-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Pagamento Confirmado!
            </h2>
            <p className="text-gray-600 mb-6">
              Seu pagamento foi processado com sucesso. Você receberá um e-mail
              com os detalhes da sua compra.
            </p>
            <button
              onClick={() => setPaymentStatus("idle")}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#07AFFF] to-[#0470AE] hover:from-[#058EDC] hover:to-[#03598A] text-white font-medium rounded-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Voltar para pagamentos
            </button>
          </div>
        </div>
      ) : paymentStatus === "error" ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white sm:rounded-xl sm:shadow-xl max-w-md w-full p-8 text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-16 w-16 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Falha no Pagamento
            </h2>
            <p className="text-gray-600 mb-6">
              Houve um problema ao processar seu pagamento. Por favor, verifique
              os dados do cartão e tente novamente.
            </p>
            <button
              onClick={() => setPaymentStatus("idle")}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#07AFFF] to-[#0470AE] hover:from-[#058EDC] hover:to-[#03598A] text-white font-medium rounded-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-[#07AFFF]" />
              <h1 className="text-2xl font-bold text-gray-800">
                Pagamento Seguro
              </h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            <div className="lg:w-2/3 w-full">
              <PaymentForm
                onSubmit={handlePaymentSubmit}
                isProcessing={paymentStatus === "processing"}
              />
            </div>

            <div className="lg:w-1/3 w-full">
              <OrderSummary />
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-sm font-medium text-gray-500">
                PAGAMENTO SEGURO
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <div className="flex justify-center space-x-8">
              <img src={Visa} alt="Visa" className="h-8 object-contain" />
              <img
                src={Mastercard}
                alt="Mastercard"
                className="h-8 object-contain"
              />
              <img src={Elo} alt="Elo" className="h-8 object-contain" />
              <img
                src={American}
                alt="American"
                className="h-8 object-contain"
              />
            </div>

            <p className="text-center text-xs text-gray-500 mt-6">
              Seus dados de pagamento são criptografados e transmitidos com
              segurança.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
