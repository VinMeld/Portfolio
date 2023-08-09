import { useState, createContext } from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Education from "./components/Education"
import { Button, Image } from "@nextui-org/react"

interface MainContextType {
  theme: string;
  toggleTheme: () => void;
}

export const MainContext = createContext<MainContextType | null>(null);

export default function App() {
  const [theme, setTheme] = useState<string>("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue = { theme, toggleTheme };

  return (
    <MainContext.Provider value={contextValue}>
      <div
        className={`min-h-screen ${theme} font-inter text-foreground bg-background`}
      >
      <Button
          type="button"
          onClick={toggleTheme}
          className="relative p-2 z-1 left-2 sm:left-10 sm:fixed top-4 text-lg p-1 rounded-sm bg-transparent"
          color="primary"
      >
          <Image
              width={25}
              alt="Sun or Moon"
              src={theme === "light" ? `./sun.svg` : `./moon.svg`}
          />
      </Button>
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Timeline />
          <Education />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </MainContext.Provider>
  );
}
