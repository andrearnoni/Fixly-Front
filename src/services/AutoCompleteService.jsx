import viaCepApi from "../api/ViaCepApi";

const autoCompleteService = async (cep, setFormData) => {
  const cleanCep = cep.replace(/[^\d]/g, "");

  if (cleanCep.length === 8) {
    try {
      const address = await viaCepApi.getAddressByCep(cleanCep);

      if (address && !address.erro) {
        setFormData((prevData) => ({
          ...prevData,
          endereco: address.logradouro,
          bairro: address.bairro,
          cidade: address.localidade,
          estado: address.uf,
        }));
      } else {
        console.error("CEP não encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error);
    }
  }
};

export default autoCompleteService;
