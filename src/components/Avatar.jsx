import { useContext } from "react";
import Context from "../context/Context";
import defaultAvatar from "../img/default-avatar.png";

function Avatar({ size = "md", className = "" }) {
  const { profileImage } = useContext(Context);

  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-32 h-32",
  };

  const sizeClasses = sizes[size] || sizes.md;

  return (
    <div className={`${sizeClasses} rounded-full overflow-hidden ${className}`}>
      <img
        src={profileImage || defaultAvatar}
        alt="Avatar do usuário"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Avatar;
