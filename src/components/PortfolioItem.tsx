import React from 'react';
import { PortfolioType } from "../../types/type"
const PortfolioItem: React.FC<PortfolioType> = ({ name, description, image, link, github, stack }) => {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden relative"
      >
         <img
            src={image}
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
         />
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{name}</h3>
            <p className="dark:text-white mb-2">{description}</p>
            <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
               {stack.map(item => (
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </div>
            <a 
               href={github} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="absolute bottom-4 right-4 text-xl dark:text-white hover:text-gray-500"
            >
            <img src="./github.svg" alt="github" className="w-6 h-6" />
            </a>
         </div>
      </a>
   )
}

export default PortfolioItem;
