import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalContext from "./context/GlobalContext";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ForgottenPassword from "./pages/ForgottenPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import Error from "./pages/Error";
import ChatBot from "./components/ChatBot";
import ScrollToTop from "./components/ScrollWithConfig";
import "./input.css";
import { useContext } from "react";
import Context from "./context/Context";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";

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