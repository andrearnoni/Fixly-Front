import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import MaskedInput from "../components/MaskedInput";
import autoCompleteService from "../services/AutoCompleteService";
import { ArrowLeft, ArrowRight } from "lucide-react";
import logo2 from "../img/logo2.png";

const CreateAccountStep2 = () => {
  const { setStep, tipoUsuario, formData, setFormData, setStepCompleto } =
    useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const isFormValid = () => {
    const nascimentoValido = !!formData.nascimento;
    const cpfCnpjValido = !!formData.cpfCnpj;
    const cepValido = !!formData.cep;
    const enderecoValido = !!formData.endereco;
    const numeroValido = !!formData.numero;
    const bairroValido = !!formData.bairro;
    const cidadeValida = !!formData.cidade;
    const estadoValido = !!formData.estado;
    const especialidadeValida =
      tipoUsuario === "cliente" ||
      (tipoUsuario === "prestador" && !!formData.especialidade);

    return (
      nascimentoValido &&
      cpfCnpjValido &&
      cepValido &&
      enderecoValido &&
      numeroValido &&
      bairroValido &&
      cidadeValida &&
      estadoValido &&
      especialidadeValida
    );
  };

  useEffect(() => {
    setStepCompleto(isFormValid());
  }, [formData, tipoUsuario, setStepCompleto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setStep(3);
      navigate("/cadastro/passo3");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-8 px-4 bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
      <div className="flex flex-col lg:flex-row lg:bg-[#FCFCFB] lg:rounded-2xl lg:shadow-lg w-full max-w-md lg:max-w-2xl relative">
        <main className="w-full p-8">
          <div className="mb-8 text-center">
            <img src={logo2} alt="Logo" className="w-20 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-700">
              Crie sua conta gratuita - Passo 2
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="nascimento"
                >
                  Data de nascimento
                </label>
                <MaskedInput
                  id="nascimento"
                  label="Data de nascimento"
                  placeholder="Digite sua data de nascimento"
                  name="nascimento"
                  value={formData.nascimento}
                  mask="data"
                  validationPattern="^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$"
                  errorMessage="Data de nascimento inválida. Use o formato DD/MM/AAAA"
                  onChange={handleChange}
                />
              </div>
              {tipoUsuario === "cliente" ? (
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1"
                    htmlFor="cpf"
                  >
                    CPF
                  </label>
                  <MaskedInput
                    id="cpf"
                    label="CPF"
                    placeholder="Digite seu CPF"
                    name="cpfCnpj"
                    value={formData.cpfCnpj}
                    mask="cpf"
                    validationPattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$"
                    errorMessage="CPF inválido. Use o formato 000.000.000-00"
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1"
                    htmlFor="cnpj"
                  >
                    CNPJ
                  </label>
                  <MaskedInput
                    id="cnpj"
                    label="CNPJ"
                    placeholder="Digite seu CNPJ"
                    name="cpfCnpj"
                    value={formData.cpfCnpj}
                    mask="cnpj"
                    validationPattern="^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$"
                    errorMessage="CNPJ inválido. Use o formato 00.000.000/0000-00"
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="cep"
                >
                  CEP
                </label>
                <MaskedInput
                  id="cep"
                  label="CEP"
                  placeholder="Digite seu CEP"
                  name="cep"
                  value={formData.cep}
                  mask="cep"
                  validationPattern="^\d{2}\.\d{3}-\d{3}$"
                  errorMessage="CEP inválido. Use o formato 00.000-000"
                  onChange={(e) => {
                    handleChange(e);
                    autoCompleteService(e.target.value, setFormData);
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="endereco"
                >
                  Endereço
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-white/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  id="endereco"
                  name="endereco"
                  type="text"
                  placeholder="Digite o endereço do seu endereço"
                  value={formData.endereco}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="numero"
                >
                  Número
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-white/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  id="numero"
                  name="numero"
                  type="text"
                  placeholder="Digite o número do seu endereço"
                  value={formData.numero}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="bairro"
                >
                  Bairro
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-white/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  id="bairro"
                  name="bairro"
                  type="text"
                  placeholder="Digite o bairro do seu endereço"
                  value={formData.bairro}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="cidade"
                >
                  Cidade
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-white/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  id="cidade"
                  name="cidade"
                  type="text"
                  placeholder="Digite sua cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="estado"
                >
                  Estado
                </label>
                <div>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-white/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    name="estado"
                    id="estado"
                    value={formData.estado}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Selecione um estado
                    </option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </div>
              </div>
            </div>
            {tipoUsuario === "prestador" && (
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-1"
                  htmlFor="especialidade"
                >
                  Especialidade do serviço
                </label>
                <div>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-white/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    name="especialidade"
                    id="especialidade"
                    value={formData.especialidade}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Selecione uma especialidade
                    </option>
                    <option value="Cabeleireiro">Jardineiro(a)</option>
                    <option value="Barbeiro">Encanador(a)</option>
                    <option value="Pintor">Pintor(a)</option>
                    <option value="Aparelho de barba">Faxineiro(a)</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between flex-wrap-reverse gap-4 my-4">
              <button
                className="inline-flex max-sm:w-full items-center justify-center gap-2 rounded-md bg-gradient-to-l from-black/50 to-gray-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-black/60 hover:to-gray-800 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                type="button"
                onClick={() => navigate("/cadastro/passo1")}
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Anterior
              </button>
              <button
                type="submit"
                className={`inline-flex max-sm:w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#07AFFF] to-[#0470AE] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-[#058EDC] hover:to-[#03598A] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                  !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid()}
              >
                Próximo <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateAccountStep2;
