import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MagicButton } from "./ui/MagicButton";
import { FaFileDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-20 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[60vw] w-[50vw]" fill="blue" />
      </div>
      <div className="sm:h-screen md:sm:h-screen lg:h-[60vh]  w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            With a passion for developing dynamic and responsive websites
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-7xl"
            words="Hi there, I'm Al-Amin Hossain, a Full stack Web Developer"
          />
          <p className="my-4">
            Transforming ideas into engaging, dynamic, and responsive websites.
            With expertise in JavaScript, React JS, Express JS, Node js, Next
            Js, MongoDB, and Tailwind CSS, I bring a comprehensive skill set to
            every project, ensuring exceptional user experiences and innovative
            web solutions.
          </p>
          <a href="/resume.pdf" download="Al-Amin-Hossain-Resume.pdf">
            <MagicButton
              title="Download My Resume"
              icon={<FaFileDownload />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
