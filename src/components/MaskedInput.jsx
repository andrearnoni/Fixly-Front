import React from "react";

const MaskedInput = ({
  id,
  label,
  placeholder,
  mask,
  name,
  value,
  type,
  onChange,
}) => {
  const handleMaskChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, ""); // Remove tudo que não for dígito

    switch (mask) {
      case "cpf":
        if (value.length > 11) value = value.slice(0, 11);
        value = value
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        break;
      case "cnpj":
        if (value.length > 14) value = value.slice(0, 14);
        value = value
          .replace(/(\d{2})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1/$2")
          .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
        break;
      case "telefone":
        if (/^\d{2}[6-9]/.test(value)) {
          if (value.length > 11) value = value.slice(0, 11);
          value = value
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4})$/, "$1-$2");
        } else {
          if (value.length > 10) value = value.slice(0, 10);
          value = value
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d{4})$/, "$1-$2");
        }
        break;
      case "data":
        if (value.length > 8) value = value.slice(0, 8);
        value = value
          .replace(/(\d{2})(\d)/, "$1/$2")
          .replace(/(\d{2})(\d)/, "$1/$2")
          .replace(/(\d{4})$/, "$1");
        break;
      case "cep":
        if (value.length > 8) value = value.slice(0, 8);
        value = value
          .replace(/(\d{2})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{3})$/, "$1-$2");
        break;

      default:
        break;
    }

    onChange({
      target: {
        name,
        value,
      },
    });
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
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleMaskChange}
      />
    </div>
  );
};

export default MaskedInput;
