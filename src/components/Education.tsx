import Title from "./Title";
import { education } from "../../public/index.ts";
import { withScrollTrigger } from "./scrollTrigger.tsx";

const EducationContent: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Education</Title>
        <div className="transition-transform transform-gpu hover:-translate-y-1 hover:scale-105">
          <ol
            className={`flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 transition-transform transform-gpu hover:-translate-y-1 hover:scale-105 ${
              isVisible ? "animate-slideUp" : "opacity-0"
            }`}
          >
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
              <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {education.year}
                </span>
                <h3 className="text-lg font-semibold">{education.degree}</h3>
                <div className="my-1 text-sm font-normal leading-none">
                  {education.university}
                </div>
                <div className="my-1 text-sm font-medium leading-none">
                  GPA: {education.gpa}
                </div>
              </p>
              {education.details.length > 0 && (
                <ul className="list-disc pl-5">
                  {education.details.map((detail, idx) => (
                    <li key={idx} className="my-2 text-base font-normal">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
const EducationWithScroll = withScrollTrigger(EducationContent);

export default EducationWithScroll;
