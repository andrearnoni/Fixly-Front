import { useContext, useState, useEffect } from "react";
import { Camera } from "lucide-react";
import Context from "../context/Context";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/auth-service";
import MaskedInput from "./MaskedInput";

function EditPanel() {
  const { profileImage, handleProfileImageUpload, infoUsuario, logout } =
    useContext(Context);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpfOuCnpj: "",
    nascimento: "",
    tipo: "",
  });

  useEffect(() => {
    const loadInitialData = async () => {
      if (infoUsuario?.id) {
        setIsLoading(true);
        try {
          let formattedDate = "";
          if (infoUsuario.nascimento) {
            const parts = infoUsuario.nascimento.split("-");
            if (parts.length === 3) {
              formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
          }

          setFormData({
            nome: infoUsuario.nome || "",
            email: infoUsuario.email || "",
            cpfOuCnpj: infoUsuario.cpfOuCnpj || "",
            nascimento: formattedDate,
            tipo: infoUsuario.roles?.[0].replace("ROLE_", "") || "",
          });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      await handleProfileImageUpload(file);
      Swal.fire({
        icon: "success",
        title: "Foto atualizada com sucesso!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao carregar imagem",
        text: error.message || "Não foi possível carregar a imagem",
        confirmButtonText: "OK",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!infoUsuario?.id || isLoading) return;

    setIsLoading(true);

    try {
      const token = authService.getAccessToken();

      const userPayload = {
        nome: formData.nome,
        email: formData.email,
        cpfOuCnpj: formData.cpfOuCnpj,
        nascimento: formData.nascimento,
        tipo: formData.tipo,
      };

      Object.keys(userPayload).forEach(
        (key) =>
          (userPayload[key] === null || userPayload[key] === "") &&
          delete userPayload[key]
      );

      console.log("Enviando dados de usuário:", userPayload);

      await axios.put(
        `http://localhost:8080/usuarios/${infoUsuario.id}`,
        userPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      Swal.fire({
        title: "Dados atualizados com sucesso!",
        text: "Você também deseja atualizar seu endereço?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Sim, atualizar endereço",
        cancelButtonText: "Não, obrigado",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/editar-endereco");
        }
      });
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);

      if (error.response) {
        console.error("Detalhes do erro:", {
          status: error.response.status,
          data: error.response.data,
        });
      }

      Swal.fire({
        icon: "error",
        title: "Erro ao atualizar dados",
        text: "Não foi possível salvar suas alterações. Tente novamente mais tarde.",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveProfile = () => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Esta ação não pode ser revertida. Todos os seus dados serão excluídos.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, excluir meu perfil",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed && infoUsuario?.id) {
        const userId = infoUsuario.id;
        const token = authService.getAccessToken();

        axios
          .delete(`http://localhost:8080/usuarios/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Perfil excluído com sucesso!",
              text: "Todos os seus dados foram removidos.",
              showConfirmButton: false,
              timer: 2000,
            }).then(() => {
              logout();
              navigate("/");
            });
          })
          .catch((error) => {
            console.error("Erro ao excluir perfil:", error);
            Swal.fire({
              icon: "error",
              title: "Erro ao excluir perfil",
              text: "Não foi possível excluir seu perfil. Tente novamente mais tarde.",
              confirmButtonText: "OK",
            });
          });
      }
    });
  };

  return (
    <div className="flex items-center justify-center bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200 py-10 px-4">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-xl sm:shadow-lg my-8">
        <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Editar Perfil
        </h2>
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera className="absolute w-6 h-6 text-gray-500" />
            )}

            <label
              htmlFor="profile-upload"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {isUploading ? (
                <div className="h-5 w-5 border-t-2 border-white rounded-full animate-spin"></div>
              ) : (
                <Camera className="w-6 h-6 text-white" />
              )}
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              disabled={isUploading}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Clique na imagem para alterar sua foto
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm mb-1">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  value={formData.nome || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block font-medium text-sm mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm mb-1">
                  Data de Nascimento
                </label>
                <MaskedInput
                  id="nascimento"
                  name="nascimento"
                  value={formData.nascimento || ""}
                  mask="data"
                  validationPattern="^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$"
                  errorMessage="Data inválida"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-medium text-sm mb-1">
                  {infoUsuario?.roles?.[0] === "ROLE_PRESTADOR"
                    ? "CNPJ"
                    : "CPF"}
                </label>
                <input
                  id="cpfOuCnpj"
                  name="cpfOuCnpj"
                  value={formData.cpfOuCnpj || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm mb-1">Tipo</label>
                <input
                  id="tipo"
                  name="tipo"
                  value={formData.tipo || ""}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300"
                  disabled
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-blue-500 text-white py-2 rounded-md transition ${
                  isLoading
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

        <div className="mt-6 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handleRemoveProfile}
            disabled={isLoading}
            className="w-full bg-white border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50 transition"
          >
            Remover meu perfil
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            Essa ação excluirá permanentemente todos os seus dados
          </p>
        </div>
      </div>
    </div>
  );
}

export default EditPanel;
