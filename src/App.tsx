import React, { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { ModeToggle } from "./components/ui/ModeToggle";

const App: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <div className="h-screen ">
      <h1>App {theme}</h1>
      <div className="flex justify-end">
        <ModeToggle />
      </div>
    </div>
  );
};

export default App;
