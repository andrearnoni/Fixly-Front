export const isStep1Complete = (formData) => {
  return (
    formData.nome.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.senha &&
    formData.senha.length >= 6
  );
};

export const isStep2Complete = (formData, tipoUsuario) => {
  const baseComplete =
    formData.nascimento &&
    formData.cep &&
    formData.endereco &&
    formData.numero &&
    formData.bairro &&
    formData.cidade &&
    formData.estado;

  if (!baseComplete) return false;

  if (tipoUsuario === "cliente") {
    return !!formData.cpfCnpj;
  } else if (tipoUsuario === "prestador") {
    return !!formData.cpfCnpj && !!formData.especialidade;
  }
  return false;
};
