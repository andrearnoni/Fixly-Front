import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./input.css";
import GlobalProvider from "./context/GlobalContext";
import ClientLogin from "./pages/ClientLogin";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-client" element={<ClientLogin />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
