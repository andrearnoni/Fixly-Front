export function salvarCadastroLocalStorage(formData) {
  const cadastrosExistentes =
    JSON.parse(localStorage.getItem("cadastros")) || [];
  cadastrosExistentes.push(formData);
  localStorage.setItem("cadastros", JSON.stringify(cadastrosExistentes));
}
