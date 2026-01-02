import React, { useContext } from 'react';
import { PortfolioType } from "../../types/type";
import { MainContext } from '../App';
import { withScrollTrigger } from './scrollTrigger';

const PortfolioItemWithScroll: React.FC<PortfolioType & { isVisible: boolean }> = ({ name, description, image, link, github, stack, imageLight, isVisible }) => {
   const context = useContext(MainContext);
   const isLightMode = context?.theme === 'light';

   return (
      <div className={`${isVisible ? "animate-slideUp" : "opacity-0"
         } flex flex-col h-full`}>
         <div
            className="flex-grow rounded-md overflow-hidden relative transition-transform transform-gpu hover:-translate-y-1 hover:scale-105 border-2 border-stone-900 dark:border-white"
         >
            <a href={link} target="_blank" rel="Link to Website" className="block relative w-full h-36 md:h-48">
               <div className="absolute inset-0 bg-gradient-to-r from-background to-border opacity-70"></div>
               <div className="absolute inset-0 flex justify-center items-center">
                  <img
                     src={isLightMode && imageLight ? imageLight : image}
                     alt="portfolio"
                     className="object-cover cursor-pointer w-11/12 h-11/12"
                  />
               </div>
            </a>
            <div className="w-full p-4">
               <a href={link} target="_blank" rel="Link to Website">
                  <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold hover:underline">{name}</h3>
               </a>
               <p className="dark:text-white mb-2">{description}</p>
               <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                  {stack.map(item => (
                     <span key={item} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        {item}
                     </span>
                  ))}
               </div>
               <a
                  href={github}
                  target="_blank"
                  rel="Link to GitHub"
                  className="absolute bottom-4 right-4 text-xl dark:text-white hover:text-gray-500"
               >
                  <img src={!isLightMode ? './lightGithub.svg' : './github.svg'} alt="github" className="w-6 h-6" />
               </a>
            </div>
         </div>
      </div>
   )
}
const PortfolioItem = withScrollTrigger(PortfolioItemWithScroll);
export default PortfolioItem;
