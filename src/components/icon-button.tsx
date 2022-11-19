import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

const IconButton: React.FC<Props> = ({ icon, ...props }) => {
  return (
    <button
      {...props}
      className="rounded-lg bg-transparent p-4 hover:bg-gray-900"
    >
      {icon}
    </button>
  );
};

export default IconButton;
