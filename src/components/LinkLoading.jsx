import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/GlobalContext";

const LinkWithLoading = ({ to, children, ...props }) => {
  const { startLoading } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    startLoading();
    setTimeout(() => {
      navigate(to);
    }, 100);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default LinkWithLoading;
