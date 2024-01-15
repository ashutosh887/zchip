import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

function Button({ text, onClick }: Props) {
  return (
    <button
      className="flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium bg-secondary bg-[#27272A] hover:bg-[#27272A]/80 text-gray-200 transition-all duration-150 ease-in-out select-none"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
