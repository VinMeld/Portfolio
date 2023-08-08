import { useContext } from "react";
import { MainContext } from "./main";  // make sure the import path is correct

export default function Home() {
  const context = useContext(MainContext);

  if (!context) {
    return <div>Error: Theme context is not available!</div>;
  }


  return (
    <>
      <article>
        <p>Home page!</p>
      </article>
    </>
  );
}
