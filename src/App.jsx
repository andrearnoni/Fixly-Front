import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./input.css";
import GlobalProvider from "./context/GlobalContext";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ForgottenPasword from "./pages/ForgottenPasword";
import Error from "./pages/Error";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account/*" element={<CreateAccount />} />
          <Route path="/forgotten-password" element={<ForgottenPasword />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
