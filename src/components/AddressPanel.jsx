import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import Swal from "sweetalert2";
import axios from "axios";
import * as authService from "../services/auth-service";
import autoCompleteService from "../services/AutoCompleteService";
import StateSelect from "./StateSelect";

function AddressPanel() {
  const { infoUsuario } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [enderecoId, setEnderecoId] = useState(null);

  const [loadingCep, setLoadingCep] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadInitialData = async () => {
      if (infoUsuario?.id) {
        setIsLoading(true);
        try {
          const token = authService.getAccessToken();
          const response = await axios.get(
            `http://localhost:8080/usuarios/${infoUsuario.id}/enderecos`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data?.content?.length > 0) {
            const endereco = response.data.content[0];
            setEnderecoId(endereco.id);

            setFormData({
              cep: endereco.cep || "",
              logradouro: endereco.logradouro || "",
              numero: endereco.numero || "",
              complemento: endereco.complemento || "",
              bairro: endereco.bairro || "",
              cidade: endereco.cidade || "",
              estado: endereco.estado || "",
            });
          }
        } catch (error) {
          console.error("Erro ao carregar dados iniciais:", error);
          Swal.fire({
            icon: "error",
            title: "Erro ao carregar dados",
            text: "Não foi possível carregar seus dados. Tente novamente mais tarde.",
            confirmButtonText: "OK",
          });
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, [infoUsuario]);

  const handleCepChange = async (e) => {
    handleChange(e);
    const cep = e.target.value.replace(/\D/g, "");

    if (cep.length === 8) {
      setLoadingCep(true);
      try {
        autoCompleteService(e.target.value, (data) => {
          if (data) {
            setFormData((prev) => ({
              ...prev,
              logradouro: data.endereco || prev.logradouro,
              bairro: data.bairro || prev.bairro,
              cidade: data.cidade || prev.cidade,
              estado: data.estado || prev.estado,
            }));
          }
          setLoadingCep(false);
        });
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        setLoadingCep(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!infoUsuario?.id || isLoading) return;

    setIsLoading(true);

    try {
      const token = authService.getAccessToken();

      const addressPayload = {
        logradouro: formData.logradouro || "",
        numero: formData.numero || "",
        complemento: formData.complemento || "",
        bairro: formData.bairro || "",
        cidade: formData.cidade || "",
        estado: formData.estado || "",
        cep: formData.cep,
        principal: true,
        usuario: {
          id: infoUsuario.id,
          nome: infoUsuario.nome,
        },
      };

      await axios.put(
        `http://localhost:8080/usuarios/${infoUsuario.id}/enderecos/${enderecoId}`,
        addressPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Dados de endereço atualizados com sucesso!",
        confirmButtonText: "OK",
      }).then(() => {
        const userType =
          infoUsuario.tipo || infoUsuario.roles?.[0]?.replace("ROLE_", "");

        if (userType === "CLIENTE") {
          navigate("/home-usuario");
        } else if (userType === "PRESTADOR") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      });
    } catch (error) {
      console.error("Erro ao atualizar dados de endereço:", error);

      if (error.response) {
        console.error("Detalhes do erro:", {
          status: error.response.status,
          data: error.response.data,
        });
      }

      Swal.fire({
        icon: "error",
        title: "Erro ao atualizar dados de endereço",
        text: "Não foi possível salvar suas alterações. Tente novamente mais tarde.",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200 py-10 px-4">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl sm:shadow-lg my-8">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Editar Endereço
        </h2>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="block font-medium text-sm mb-1">CEP</label>
              <input
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleCepChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                disabled={loadingCep}
              />
              {loadingCep && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="h-4 w-4 border-t-2 border-blue-500 rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">Endereço</label>
              <input
                type="text"
                name="logradouro"
                value={formData.logradouro}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm mb-1">Número</label>
                <input
                  type="text"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block font-medium text-sm mb-1">
                  Complemento
                </label>
                <input
                  type="text"
                  name="complemento"
                  value={formData.complemento}
                  onChange={handleChange}
                  placeholder="Apto, Bloco, etc."
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm mb-1">Bairro</label>
                <input
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block font-medium text-sm mb-1">Cidade</label>
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">Estado</label>
              <StateSelect
                value={formData.estado}
                onChange={handleChange}
                name="estado"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading || loadingCep}
                className={`w-full bg-blue-500 text-white py-2 rounded-md transition ${
                  isLoading || loadingCep
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <div className="h-4 w-4 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                    Salvando...
                  </span>
                ) : (
                  "Salvar"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddressPanel;
