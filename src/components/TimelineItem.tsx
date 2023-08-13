import React from "react";
import { TimelineType } from "../../types/type.ts";
import { withScrollTrigger } from "./scrollTrigger.tsx"

const TimelineItemComponent: React.FC<
  TimelineType & { isVisible: boolean }
> = ({ year, title, duration, details, company, location, isVisible }) => {
  return (
    <div className="transition-transform transform-gpu hover:-translate-y-1 hover:scale-105">
    <ol
      className={`flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700  ${
        isVisible ? "animate-slideUp" : "opacity-0"
      }`}
    >
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="my-1 text-sm font-normal leading-none">
            {duration}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {company}, {location}
          </div>
        </p>
        {details.length > 0 && (
          <ul className="list-disc pl-5">
            {details.map((detail, idx) => (
              <li
                key={idx}
                className="my-2 text-base font-normal"
                dangerouslySetInnerHTML={{ __html: detail }}
              />
            ))}
          </ul>
        )}
      </li>
    </ol>
    </div>

  );
};

const TimelineItem = withScrollTrigger(TimelineItemComponent);
export default TimelineItem;
