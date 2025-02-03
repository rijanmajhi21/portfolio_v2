import React, { FunctionComponent } from "react";
import Button from "../commons/buttons/button";
import Image from "next/image";

const SkillSection: FunctionComponent = () => {
  return (
    <section className="c-container flex flex-col gap-10 mx-auto pb-10">
      <div className="flex w-full justify-between">
        <div className="text-center md:text-start font-anton text-[5vw] md:text-[3vw] lg:text-[2.5vw]">
          <span>What I can do for you:</span>
        </div>
        <Button text="Let's start a project!" href={""} variant="dark" />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 border-4 border-neutral-800 rounded-lg w-1/3 px-8 py-10">
          <div className="relative py-2 h-10 w-10">
            <Image
              src="/skills-logo/nextjs-icon.png"
              alt="Nextjs Logo"
              height={40}
              width={80}
            />
          </div>
          <div className="">
            <div className="py-2 font-anton md:text-start lg:text-title-4 md:text-body-base">
              <span>Frontend Development</span>
            </div>
            <div className="text-body-big py-2">
              <p>
                Crafting responsive and dynamic web applications using Next.js,
                React, and TypeScript for seamless user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-4 border-neutral-800 rounded-lg w-1/3 px-8 py-10">
          <div className="relative py-2 h-10 w-10">
            <Image
              src="/skills-logo/figma-logo.png"
              alt="Figma Logo"
              height={30}
              width={30}
            />
          </div>
          <div className="">
            <div className="py-2 font-anton md:text-start lg:text-title-4 md:text-body-base">
              <span>UI/UX Design</span>
            </div>
            <div className="text-body-big py-2">
              <p>
                Designing intuitive and visually appealing user interfaces with
                Figma, focusing on user-centric experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-4 border-neutral-800 rounded-lg w-1/3 px-8 py-10">
          <div className="relative py-2 h-10 w-20">
            <Image
              src="/skills-logo/sketching.png"
              alt="Sketching Logo"
              height={40}
              width={80}
            />
          </div>
          <div className="">
            <div className="py-2 font-anton md:text-start lg:text-title-4 md:text-body-base">
              <span>Arts and Sketching</span>
            </div>
            <div className="text-body-big py-2">
              <p>
                Expressing creativity through sketches, paintings, and digital
                art, bringing ideas to life with unique artistic styles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
