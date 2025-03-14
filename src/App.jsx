import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalContext from "./context/GlobalContext";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import HomeUser from "./pages/HomeUser";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ForgottenPassword from "./pages/ForgottenPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import Error from "./pages/Error";
import ChatBot from "./components/ChatBot";
import "./input.css";
import { useContext } from "react";
import Context from "./context/Context";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import AddressPanel from "./components/AddressPanel";

function AppContent() {
  const { isLoading } = useContext(Context);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro/*" element={<CreateAccount />} />
        <Route path="/esqueci-a-senha" element={<ForgottenPassword />} />
        <Route path="/resetar-senha" element={<CreateNewPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home-usuario" element={<HomeUser />} />
        <Route path="/editar-usuario" element={<EditUser />} />
        <Route path="/editar-endereco" element={<AddressPanel />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/pagamento" element={<Payment />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <ChatBot />
    </>
  );
}

function App() {
  return (
    <GlobalContext>
      <Router>
        <AppContent />
      </Router>
    </GlobalContext>
  );
}

export default App;
