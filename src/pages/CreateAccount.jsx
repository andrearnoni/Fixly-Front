import { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import CreateAccountStep1 from "../components/CreateAccountStep1";
import CreateAccountStep2 from "../components/CreateAccountStep2";
import CreateAccountStep3 from "../components/CreateAccountStep3";
import Context from "../context/Context";
import ProtectedRoute from "../components/ProtectedRoute";

const CreateAccount = () => {
  const { step } = useContext(Context);
  const location = useLocation();

  return (
    <Routes>
      <Route path="passo1" element={<CreateAccountStep1 />} />
      <Route
        path="passo2"
        element={
          <ProtectedRoute requiredStep={2}>
            <CreateAccountStep2 />
          </ProtectedRoute>
        }
      />
      <Route
        path="passo3"
        element={
          <ProtectedRoute requiredStep={3}>
            <CreateAccountStep3 />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <Navigate to={`/cadastro/passo${step}`} state={location.state} />
        }
      />
    </Routes>
  );
};

export default CreateAccount;
