// src/components/Button/Button.jsx
import React from "react";

export default function Button({ text, className = "", href, newTab }) {
  return (
    <div className={className}>
      <a
        className="bg-orange-500 border border-orange-500 text-white font-bold px-6 py-3 mt-5 rounded-md text-center uppercase text-base block transition-transform duration-300 ease-in-out hover:bg-gray-800 hover:text-orange-500 hover:-translate-y-1"
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
      >
        {text}
      </a>
    </div>
  );
}
