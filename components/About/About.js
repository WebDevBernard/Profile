import Skills from "../Skills/Skills";
import classes from "./About.module.css";

export default function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className={classes.title}>
      <Skills />

      <span>
        <p className={classes.project_title}>About me</p>
        <div>
          <p className={classes.aboutcard}>
            I am a front end developer who recently completed the Lighthouse
            Labs Web Development Program. What I enjoy the most about coding is
            making my personal projects and learning how to automate things with
            code. I am really interested in developing in the DeFi space but am
            open to learning anything that will help me become become a better
            programmer. When I am not coding, I enjoying watching movies and
            playing videogames.
          </p>
        </div>
      </span>
    </div>
  );
}
