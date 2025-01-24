import React, { useState } from "react";

const MaskedInput = ({
  id,
  label,
  placeholder,
  name,
  value,
  type = "text",
  mask,
  validationPattern,
  errorMessage,
  onChange,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const applyMask = (rawValue, maskType) => {
    let maskedValue =
      maskType === "email" ? rawValue : rawValue.replace(/\D/g, "");

    switch (maskType) {
      case "cpf":
        if (maskedValue.length > 11) maskedValue = maskedValue.slice(0, 11);
        return maskedValue
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      case "cnpj":
        if (maskedValue.length > 14) maskedValue = maskedValue.slice(0, 14);
        return maskedValue
          .replace(/(\d{2})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1/$2")
          .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
      case "telefone":
        if (/^\d{2}[6-9]/.test(maskedValue)) {
          if (maskedValue.length > 11) maskedValue = maskedValue.slice(0, 11);
          return maskedValue
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4})$/, "$1-$2");
        } else {
          if (maskedValue.length > 10) maskedValue = maskedValue.slice(0, 10);
          return maskedValue
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d{4})$/, "$1-$2");
        }
      case "data":
        if (maskedValue.length > 8) maskedValue = maskedValue.slice(0, 8);
        return maskedValue
          .replace(/(\d{2})(\d)/, "$1/$2")
          .replace(/(\d{2})(\d)/, "$1/$2")
          .replace(/(\d{4})$/, "$1");
      case "cep":
        if (maskedValue.length > 8) maskedValue = maskedValue.slice(0, 8);
        return maskedValue
          .replace(/(\d{2})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{3})$/, "$1-$2");
      case "email":
        return maskedValue.replace(/[^a-zA-Z0-9@._-]/g, "");
      default:
        return rawValue;
    }
  };

  const validateInput = (inputValue) => {
    if (!validationPattern) return true;
    const regex = new RegExp(validationPattern);
    return regex.test(inputValue);
  };

  const handleChange = (e) => {
    const rawValue = e.target.value;
    const maskedValue = mask ? applyMask(rawValue, mask) : rawValue;

    onChange({
      target: {
        name,
        value: maskedValue,
      },
    });

    setIsEmpty(maskedValue === "");
  };

  const handleBlur = () => {
    if (value === "") {
      setShowError(false);
    } else {
      const valid = validateInput(value);
      setIsValid(valid);
      setShowError(!valid);
    }
  };

  const handleFocus = () => {
    setShowError(false);
  };

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          !isValid && !isEmpty && showError ? "border-red-500 border-[3px]" : ""
        }`}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {showError && (
        <p className="text-red-500 text-xs italic mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default MaskedInput;
