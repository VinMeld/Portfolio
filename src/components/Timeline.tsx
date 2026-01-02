import TimelineItem from "./TimelineItem";
import Title from "./Title";
import { timeline } from "../../public/index.ts";

const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
