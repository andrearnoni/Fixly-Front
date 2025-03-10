import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../context/Context";
import { isStep1Complete, isStep2Complete } from "../utils/Validation";

const ProtectedRoute = ({ children, requiredStep }) => {
  const { formData, tipoUsuario } = useContext(Context);

  if (requiredStep === 2 && !isStep1Complete(formData)) {
    return <Navigate to="/cadastro/passo1" />;
  }

  if (requiredStep === 3) {
    if (!isStep1Complete(formData)) {
      return <Navigate to="/cadastro/passo1" />;
    }
    if (!isStep2Complete(formData, tipoUsuario)) {
      return <Navigate to="/cadastro/passo2" />;
    }
  }

  return children;
};

export default ProtectedRoute;
