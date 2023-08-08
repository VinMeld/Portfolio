// main.tsx or main.jsx
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import App from "./App";
import "./index.css";

interface MainContextType {
  theme: string;
  toggleTheme: () => void;
};

export const MainContext = createContext<MainContextType | null>(null);
const [theme, setTheme] = React.useState<string>("light");
const toggleTheme = () => {
  setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
    <MainContext.Provider value={{ theme, toggleTheme }}>
      <main className={`${theme} text-foreground bg-background`}>
        <App />
        </main>
    </MainContext.Provider>

    </NextUIProvider>
  </React.StrictMode>,
);