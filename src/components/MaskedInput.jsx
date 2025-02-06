import { useState } from "react";
import { Mail, Lock } from "lucide-react";

const MaskedInput = ({
  id,
  placeholder,
  name,
  value,
  type = "text",
  validationPattern,
  errorMessage,
  mask,
  customValidation,
  onChange,
  required = false,
  showErrorForcefully = false,
  hasIcon,
  eyesIcon,
}) => {
  const [showError, setShowError] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

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
    if (typeof customValidation === "function") {
      return customValidation(inputValue);
    }
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

    setHasChanged(true);

    if (!maskedValue) {
      setShowError(false);
    }
  };

  const handleBlur = () => {
    if (hasChanged && value) {
      const valid = validateInput(value);
      setShowError(!valid);
    } else {
      setShowError(false);
    }
  };

  const handleFocus = () => {
    setShowError(false);
  };

  const shouldShowError =
    (showError && hasChanged && value) ||
    (showErrorForcefully && !value && required);

  const iconVisible =
    typeof hasIcon === "boolean"
      ? hasIcon
      : type === "email" || type === "password";

  return (
    <div className="relative">
      {iconVisible && type === "email" ? (
        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
      ) : (iconVisible && type === "password") || (eyesIcon && hasIcon) ? (
        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
      ) : null}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className={`flex h-10 w-full rounded-md border border-input bg-white/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        ${iconVisible ? "pl-10" : "pl-3"} 
        ${shouldShowError ? "border-red-500 border-[3px]" : ""}
        ${eyesIcon === true ? "pr-10" : ""}`}
        noValidate
      />
      {shouldShowError && (
        <p className="text-red-500 text-xs italic mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default MaskedInput;
