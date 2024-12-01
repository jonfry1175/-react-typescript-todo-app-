import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem("darkMode") === "true" // Persist mode
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-bg dark:bg-darkBg text-text dark:text-darkText flex flex-col items-center justify-center">
      <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
      <h1 className="text-4xl font-heading">App</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-4 px-4 py-2 bg-main dark:bg-secondaryBlack text-white rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default App;
