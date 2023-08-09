import { useContext } from "react";
import { MainContext } from "../App";
import { Image } from "@nextui-org/react";

export default function Intro() {
  const context = useContext(MainContext);

  if (!context) {
    return <div>Error: Theme context is not available!</div>;
  }

  return (
    <section className={`flex items-center justify-center flex-col min-h-screen`}> {/* Added min-h-screen to ensure it occupies the entire viewport height */}
      <div className="text-center">
        <img
          src="./profile.png"
          alt="profile"
          className="rounded-full w-48 sm:w-64 md:w-96 lg:w-1/4 xl:w-1/3 mb-4 mx-auto" 
        />
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3">
          Vinay
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Software Engineer
        </p>
        <p className="text-sm md:text-base lg:text-lg max-w-xl mb-6 font-bold">
          I'm a software engineer based in Ottawa, Canada specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
        </p>
      </div>
    </section>
  );
}
