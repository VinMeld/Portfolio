// App.tsx or App.jsx
import React, { createContext } from "react";
import Home from "./Home";

interface MainContextType {
  theme: string;
  toggleTheme: () => void;
};

export const MainContext = createContext<MainContextType | null>(null);

export default function App() {
  const [theme, setTheme] = React.useState<string>("light");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <MainContext.Provider value={{ theme, toggleTheme }}>
      <Home />
    </MainContext.Provider>
  )
}
