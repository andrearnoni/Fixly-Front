import axios from "axios";

const estadoParaSigla = {
  Acre: "AC",
  Alagoas: "AL",
  Amapá: "AP",
  Amazonas: "AM",
  Bahia: "BA",
  Ceará: "CE",
  "Distrito Federal": "DF",
  "Espírito Santo": "ES",
  Goiás: "GO",
  Maranhão: "MA",
  "Mato Grosso": "MT",
  "Mato Grosso do Sul": "MS",
  "Minas Gerais": "MG",
  Pará: "PA",
  Paraíba: "PB",
  Paraná: "PR",
  Pernambuco: "PE",
  Piauí: "PI",
  "Rio de Janeiro": "RJ",
  "Rio Grande do Norte": "RN",
  "Rio Grande do Sul": "RS",
  Rondônia: "RO",
  Roraima: "RR",
  "Santa Catarina": "SC",
  "São Paulo": "SP",
  Sergipe: "SE",
  Tocantins: "TO",
};

const createNewUser = async (formData) => {
  try {
    const payload = {
      nome: formData.nome,
      email: formData.email,
      cpfOuCnpj: formData.cpfCnpj,
      nascimento: formData.nascimento,
      senha: formData.senha,
      tipo: formData.tipoUsuario,
      enderecos: [
        {
          logradouro: formData.endereco,
          numero: formData.numero,
          complemento: formData.complemento,
          bairro: formData.bairro,
          cidade: formData.cidade,
          estado: estadoParaSigla[formData.estado] || formData.estado,
          cep: formData.cep,
          principal: formData.principal,
        },
      ],
    };

    const response = await axios.post(
      "http://localhost:8080/usuarios",
      payload
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      const validationErrors = error.response.data.errors;
      console.error("Erros de validação:", validationErrors);
      throw new Error(
        validationErrors
          .map((err) => `${err.fieldName}: ${err.message}`)
          .join(", ")
      );
    } else {
      console.error("Erro ao cadastrar usuário:", error);
      throw error;
    }
  }
};

export { createNewUser };
