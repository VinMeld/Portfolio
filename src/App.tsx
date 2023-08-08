import { useState, createContext } from "react";
import Home from "./Home";

interface MainContextType {
  theme: string;
  toggleTheme: () => void;
};

export const MainContext = createContext<MainContextType | null>(null);

export default function App() {
  const [theme, setTheme] = useState<string>("light");
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  const contextValue = { theme, toggleTheme };

  return (
    <MainContext.Provider value={contextValue}>
      <Home />
    </MainContext.Provider>
  );
}