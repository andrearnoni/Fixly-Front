import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateAccountStep1 from "../components/CreateAccountStep1";
import CreateAccountStep2 from "../components/CreateAccountStep2";
import CreateAccountStep3 from "../components/CreateAccountStep3";
import { Context } from "../context/GlobalContext";

const CreateAccount = () => {
  const { step } = useContext(Context);

  return (
    <Routes>
      <Route path="step1" element={<CreateAccountStep1 />} />
      <Route path="step2" element={<CreateAccountStep2 />} />
      <Route path="step3" element={<CreateAccountStep3 />} />
      <Route
        path="*"
        element={<Navigate to={`/create-account/step${step}`} />}
      />
    </Routes>
  );
};

export default CreateAccount;
