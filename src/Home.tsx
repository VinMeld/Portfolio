import { useContext } from "react";
import { MainContext } from "./App";  // make sure the import path is correct
import { Button } from "@nextui-org/react";

export default function Home() {
  const context = useContext(MainContext);

  if (!context) {
    return <div>Error: Theme context is not available!</div>;
  }

  const { theme, toggleTheme } = context;

  return (
    <article className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">
        Welcome to the {theme.charAt(0).toUpperCase() + theme.slice(1)} Forest Theme!
      </h2>
      <p className="text-primary">The current theme is {theme}.</p>
      
      <div className="flex gap-4 items-center">
        <Button size="sm" color="primary">
          Small Primary
        </Button>  
        <Button size="md" color="secondary">
          Medium Secondary
        </Button>  
        <Button size="lg" color="success">
          Large Success
        </Button>  
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <Button color="default">
          Default
        </Button>
        <Button color="primary">
          Primary
        </Button>  
        <Button color="secondary">
          Secondary
        </Button>  
        <Button color="success">
          Success
        </Button>  
        <Button color="warning">
          Warning
        </Button>  
        <Button color="danger">
          Danger
        </Button>
        <Button onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </div>
    </article>
  );
}
