import { FC } from "react";
import Image from "next/image";

interface RefObject<T> {
  readonly current: T | null;
}
const Hero: FC<{
  scrollContact: () => void;
  aboutRef: RefObject<HTMLDivElement>;
}> = ({ scrollContact, aboutRef }) => {
  return (
    <div
      ref={aboutRef}
      className="tracking-wider flex flex-col justify-around md:max-w-lg m-auto sm:mt-0 md:mt-16 lg:mt-12 p-4"
    >
      <div>
        <div className="flex justify-between items-center flex-col md:flex-row">
          {/* left */}
          <div className="flex flex-col justify-center  md:items-start md:w-5/12">
            <h1 className=" font-bold font-serif text-3xl inline-block mb-6">
              Hello
            </h1>

            <p className="text-sm tracking-tight leading-7">
              I am Bernard, a web developer in Vancouver. Last year (2021) I
              decided to make the transition from a long time career in customer
              service to web development. I did a coding bootcamp and from that
              experience, I learned how much I enjoyed the design side of
              frontend web development. Since then, I have been building on my
              frontend skills by doing a combination of Udemy courses and
              personal projects.
            </p>

            <div className="flex divide-x divide-slate-600 pb-4  mt-6">
              <button onClick={scrollContact} className="pr-6 btn-secondary">
                Work With Me
              </button>
              <a href="/resume.pdf">
                <button className="pl-6 btn-secondary">View Resume</button>
              </a>
            </div>
            {/* right */}
          </div>
          <div className="select-none md:w-[420px] mt-16 md:h-[420px] relative w-[280px] h-[280px] bg-transparent">
            <Image
              src="/docs/programming-animate.svg"
              alt="hero image"
              layout="fill"
              objectFit="contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
