import { useRef, FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroBottomAnimation, heroTopAnimation } from "../styles/variants";
import useScroll from "../hooks/useScroll";

const Hero: FC<{ scrollContact: () => void }> = ({ scrollContact }) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [ref, controls] = useScroll();
  return (
    <div className="flex flex-col justify-evenly md:h-screen">
      <div>
        <div className="flex justify-evenly items-center flex-col md:flex-row">
          {/* left */}
          <div className="w-full flex flex-col justify-center items-center md:items-start md:w-1/2 ">
            <h1 className="ml-8 md:ml-0  text-2xl leading-tight tracking-wider">
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={heroTopAnimation}
                className="font-bold text-4xl text-indigo-900  inline-block"
              >
                Hello!
              </motion.div>
              <span>
                <br />
                I am Bernard,
                <br />a{" "}
                <span className="relative">
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={heroBottomAnimation}
                    className={`z-0 w-[239px] h-[29px] highlight inline-block absolute`}
                  ></motion.div>
                  <span className="z-10 relative" ref={spanRef}>
                    software engineer
                  </span>{" "}
                  in Vancouver{" "}
                </span>
              </span>
            </h1>
            <div className="flex justify-start mt-12 md:mt-6">
              <button onClick={scrollContact} className="btn btn-primary mr-2">
                Work With Me
              </button>
              <a
                href="/resume.pdf"
                // target="_blank" rel="noreferrer"
              >
                <button className="btn btn-primary">View Resume</button>
              </a>
            </div>
            {/* right */}
          </div>
          <div
            style={{ width: "360px", height: "420px", position: "relative" }}
          >
            <Image
              src="/docs/programming-animate.svg"
              alt="programmer guy"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-indigo-900 motion-safe:animate-bounce h-[40px] w-[40px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
