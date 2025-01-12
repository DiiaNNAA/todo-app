import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded"
        />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
