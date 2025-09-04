import React from "react";

export default function ToggleSwitch({ isDark, toggleTheme }) {
  return (
    <div className="flex items-center justify-center p-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={isDark} onChange={toggleTheme} className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
      </label>
    </div>
  );
}

