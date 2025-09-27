import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-[#E8C155] hover:bg-indigo-700 text-black font-bold px-6 py-3 rounded-2xl shadow-lg transition-colors duration-200 text-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}