"use client";

import React, { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.querySelector("html")?.setAttribute("data-theme", savedTheme);
  }, []);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);

    // Save theme to localStorage
    try {
      localStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  };

  return (
    <div>
      <div className="navbar h-auto bg-slate-500 px-6 w-full">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl sm:text-lg font-semibold font-serif">
            Coins Market Updates
          </a>
        </div>
        <div className="flex-none">
          <label className="swap swap-rotate" aria-label="Toggle Dark Mode">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "dark"}
            />
            <svg
              className="swap-on h-8 w-8 sm:h-10 sm:w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Sun Icon */}
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17Z..." />
            </svg>
            <svg
              className="swap-off h-8 w-8 sm:h-10 sm:w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Moon Icon */}
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37..." />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
