import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/usuarios`);
        console.log(response.data); // Veja no console o formato dos dados
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
};

export const postUser = async () => {
    try {
        const userData = {
            username: "fabio@gmail.com",
            password: "123456",
            grant_type: "password"
        }
        const response = await axios.post(`${API_URL}/oauth2/token`, userData);
        console.log("Aqui")
        return response.data
    } catch (error) {
        console.log("Erro ao cadastrar usuário.", error);
    }
}