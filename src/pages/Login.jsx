// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Context from "../context/Context";
// import Swal from "sweetalert2";
// import LinkLoading from "../components/LinkLoading";
// import { ArrowLeft, Eye, EyeOff, ArrowRight } from "lucide-react";
// import logo2 from "../img/logo2.png";
// import video from "../img/trabalhadores.gif";
// import MaskedInput from "../components/MaskedInput";
// import * as authService from "../services/auth-service";
// import Loading from "../components/Loading";

// function Login() {
//   const [senhaVisivel, setSenhaVisivel] = useState(false);
//   const [email] = useState("");
//   const [senha] = useState("");
//   const [showErrors, setShowErrors] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const [isLocalLoading, setIsLocalLoading] = useState(false);

//   const navigate = useNavigate();

//   const { setInfoUsuario, startLoading } = useContext(Context);

//   const handleReturn = () => {
//     navigate("/");
//   };

//   const handleSubmit = async (e) => {
//     if (e) e.preventDefault();
//     setShowErrors(true);

//     const isEmailValid =
//       /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
//         formData.username
//       );
//     const isSenhaValid = formData.password.length >= 6;

//     if (!isEmailValid || !isSenhaValid) {
//       return;
//     }

//     setIsLocalLoading(true);
//     startLoading();

//     try {
//       const loginResponse = await authService.loginRequest(formData);
//       authService.saveAccessToken(loginResponse.data.access_token);

//       const token = authService.getAccessToken();
//       const getRole = authService.decodeToken(token).authorities[0];

//       const userDataResponse = await authService.fetchUserData(token);
//       setInfoUsuario(userDataResponse.data);

//       const minLoadingTime = 2000;
//       await new Promise((resolve) => setTimeout(resolve, minLoadingTime));

//       if (getRole === "ROLE_PRESTADOR") {
//         navigate("/dashboard");
//       } else if (getRole === "ROLE_CLIENTE") {
//         navigate("/usuario");
//       } else {
//         navigate("/");
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Email e/ou senha inválido(s)!",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//       setFormData({ username: "", password: "" });
//     } finally {
//       setIsLocalLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     const name = e.target.name;
//     setFormData({ ...formData, [name]: value });
//   };

//   if (isLocalLoading) {
//     return <Loading />;
//   }

//   return (
//     <div className="flex items-center justify-center h-screen p-4 bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
//       <div className="flex flex-col lg:flex-row lg:bg-[#FCFCFB] lg:rounded-2xl lg:shadow-lg w-full max-w-md lg:max-w-2xl relative">
//         <button
//           onClick={handleReturn}
//           className="absolute top-4 left-4 text-gray-400 hover:text-gray-900 focus:outline-none"
//           aria-label="Voltar"
//         >
//           <ArrowLeft className="w-6 h-6" />
//         </button>

//         <aside className="hidden lg:block lg:w-1/2 bg-[#FDFDFD]">
//           <img
//             src={video}
//             alt="Login Visual"
//             className="w-full h-full p-14 object-cover rounded-l-lg"
//           />
//         </aside>

//         <main className="w-full lg:w-1/2 p-8">
//           <div className="mb-8 text-center">
//             <img src={logo2} alt="Logo" className="w-20 mx-auto mb-4" />
//             <p className="mt-2 text-lg text-gray-600">
//               Já é cliente? Acesse sua conta
//             </p>
//           </div>

//           <form className="space-y-6" onSubmit={handleSubmit} noValidate>
//             <div>
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-1"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <MaskedInput
//                 id="email"
//                 placeholder="Digite seu email"
//                 name="username"
//                 value={formData.username}
//                 type="email"
//                 mask="email"
//                 validationPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
//                 errorMessage="Email inválido"
//                 onChange={handleInputChange}
//                 required
//                 showErrorForcefully={showErrors && !email}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-1">
//                 Senha
//               </label>
//               <div className="relative">
//                 <MaskedInput
//                   id="senha"
//                   placeholder="Digite sua senha"
//                   name="password"
//                   value={formData.password}
//                   type={senhaVisivel ? "text" : "password"}
//                   validationPattern=".{6,}"
//                   errorMessage="Senha deve ter pelo menos 6 caracteres"
//                   onChange={handleInputChange}
//                   required
//                   showErrorForcefully={showErrors && !senha}
//                   hasIcon={true}
//                   eyesIcon={true}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setSenhaVisivel(!senhaVisivel)}
//                   className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//                 >
//                   {senhaVisivel ? (
//                     <EyeOff className="h-5 w-5" />
//                   ) : (
//                     <Eye className="h-5 w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex justify-between text-sm">
//               <LinkLoading
//                 to="/esqueci-a-senha"
//                 className="text-[#07AFFF] hover:text-[#058edc] transition-colors"
//               >
//                 Esqueceu sua senha?
//               </LinkLoading>
//               <LinkLoading
//                 to="/cadastro"
//                 className="text-[#07AFFF] hover:text-[#058edc] transition-colors"
//               >
//                 Criar conta
//               </LinkLoading>
//             </div>

//             <button
//               type="submit"
//               className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#07AFFF] to-[#0470AE] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-[#058EDC] hover:to-[#03598A] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
//             >
//               Entrar
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </button>

//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white lg:bg-[#FCFCFB] text-gray-500">
//                   Ou acesse com
//                 </span>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
//               >
//                 <img
//                   src="https://img.icons8.com/color/16/000000/google-logo.png"
//                   className="inline-block mr-2"
//                   alt="Google"
//                 />
//                 Google
//               </button>
//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
//               >
//                 <img
//                   src="https://img.icons8.com/?size=18&id=118497&format=png&color=000000"
//                   className="pr-1"
//                   alt="Facebook Logo"
//                 />
//                 Facebook
//               </button>
//             </div>
//           </form>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";
import Swal from "sweetalert2";
import LinkLoading from "../components/LinkLoading";
import { ArrowLeft, Eye, EyeOff, ArrowRight } from "lucide-react";
import logo2 from "../img/logo2.png";
import video from "../img/trabalhadores.gif";
import MaskedInput from "../components/MaskedInput";
import * as authService from "../services/auth-service";
import Loading from "../components/Loading";

function Login() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [email] = useState("");
  const [senha] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  const navigate = useNavigate();

  const { setInfoUsuario, startLoading } = useContext(Context);

  const handleReturn = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setShowErrors(true);

    const isEmailValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        formData.username
      );
    const isSenhaValid = formData.password.length >= 6;

    if (!isEmailValid || !isSenhaValid) {
      return;
    }

    setIsLocalLoading(true);
    startLoading();

    try {
      const loginResponse = await authService.loginRequest(formData);
      authService.saveAccessToken(loginResponse.data.access_token);

      const token = authService.getAccessToken();
      const getRole = authService.decodeToken(token).authorities[0];

      const userDataResponse = await authService.fetchUserData(token);
      setInfoUsuario(userDataResponse.data);

      const minLoadingTime = 2000;
      await new Promise((resolve) => setTimeout(resolve, minLoadingTime));

      if (getRole === "ROLE_PRESTADOR") {
        navigate("/dashboard");
      } else if (getRole === "ROLE_CLIENTE") {
        navigate("/usuario");
      } else {
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Email e/ou senha inválido(s)!",
        showConfirmButton: false,
        timer: 2000,
      });
      setFormData({ username: "", password: "" });
    } finally {
      setIsLocalLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  };

  if (isLocalLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center h-screen p-4 bg-white sm:bg-gradient-to-br sm:from-white sm:to-blue-200">
      <div className="flex flex-col lg:flex-row lg:bg-[#FCFCFB] lg:rounded-2xl lg:shadow-lg w-full max-w-md lg:max-w-2xl relative">
        <button
          onClick={handleReturn}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-900 focus:outline-none"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <aside className="hidden lg:block lg:w-1/2 bg-[#FDFDFD]">
          <img
            src={video}
            alt="Login Visual"
            className="w-full h-full p-14 object-cover rounded-l-lg"
          />
        </aside>

        <main className="w-full lg:w-1/2 p-8">
          <div className="mb-8 text-center">
            <img src={logo2} alt="Logo" className="w-20 mx-auto mb-4" />
            <p className="mt-2 text-lg text-gray-600">
              Já é cliente? Acesse sua conta
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <MaskedInput
                id="email"
                placeholder="Digite seu email"
                name="username"
                value={formData.username}
                type="email"
                mask="email"
                validationPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                errorMessage="Email inválido"
                onChange={handleInputChange}
                required
                showErrorForcefully={showErrors && !email}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Senha
              </label>
              <div className="relative">
                <MaskedInput
                  id="senha"
                  placeholder="Digite sua senha"
                  name="password"
                  value={formData.password}
                  type={senhaVisivel ? "text" : "password"}
                  validationPattern=".{6,}"
                  errorMessage="Senha deve ter pelo menos 6 caracteres"
                  onChange={handleInputChange}
                  required
                  showErrorForcefully={showErrors && !senha}
                  hasIcon={true}
                  eyesIcon={true}
                />
                <button
                  type="button"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {senhaVisivel ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <LinkLoading
                to="/esqueci-a-senha"
                className="text-[#07AFFF] hover:text-[#058edc] transition-colors"
              >
                Esqueceu sua senha?
              </LinkLoading>
              <LinkLoading
                to="/cadastro"
                className="text-[#07AFFF] hover:text-[#058edc] transition-colors"
              >
                Criar conta
              </LinkLoading>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#07AFFF] to-[#0470AE] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:from-[#058EDC] hover:to-[#03598A] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Entrar
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white lg:bg-[#FCFCFB] text-gray-500">
                  Ou acesse com
                </span>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none"
            >
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                className="inline-block mr-2"
                alt="Google"
              />
              Google
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Login;
