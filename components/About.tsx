import { FC } from "react";
import { aboutData } from "../data/about-data";
interface RefObject<T> {
  readonly current: T | null;
}
const About: FC<{ aboutRef: RefObject<HTMLDivElement> }> = ({ aboutRef }) => {
  return (
    <div className=" space-y-6 mx-auto w-full flex flex-col items-center md:w-8/12">
      <span className="flex self-start items-center space-x-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="self-start text-lg font-bold text-indigo-900">
          About Me
        </h2>
      </span>
      <div>
        <div
          className="bg-neutral-50 shadow-md font-serif tracking-wide space-y-4 p-6 text-[16px]  rounded-lg overflow-hidden"
          ref={aboutRef}
        >
          <p>{aboutData[0]}</p>
          <p>{aboutData[1]}</p>
          <p>{aboutData[2]}</p>
          <p>{aboutData[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
