import { useContext } from "react";
import { MainContext } from "./App";  // make sure the import path is correct

export default function Home() {
  const context = useContext(MainContext);

  if (!context) {
    return <div>Error: Theme context is not available!</div>;
  }

  const { theme, toggleTheme } = context;

  return (
    <>
      <article>
        <p>The current theme is {theme}.</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </article>
    </>
  );
}
