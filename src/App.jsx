// src/App.jsx
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/GlobalContext";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import "./input.css";
import GlobalProvider from "./context/GlobalContext";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ForgottenPasword from "./pages/ForgottenPasword";
import CreateNewPassword from "./pages/CreateNewPassword";
import Error from "./pages/Error";

const AppContent = () => {
  const { isLoading } = useContext(Context);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro/*" element={<CreateAccount />} />
        <Route path="/esqueci-a-senha" element={<ForgottenPasword />} />
        <Route path="/resetar-senha" element={<CreateNewPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <GlobalProvider>
      <Router>
        <AppContent />
      </Router>
    </GlobalProvider>
  );
}

export default App;
