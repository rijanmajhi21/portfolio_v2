"use client";
import Image from "next/image";
import { FunctionComponent } from "react";
import Button from "../commons/buttons/button";

const ProjectBottomBanner: FunctionComponent = () => {
  return (
    <section className="flex flex-col">
      <div className="relative h-[190px] w-full overflow-hidden xs:h-[250px] sm:h-[320px] md:h-[380px] lg:h-[500px] ">
        <Image
          src="/images/coding.png"
          alt="Bottom Banner Image"
          className="absolute inset-0 h-full w-full object-cover"
          layout="fill"
          priority
        />
        <div className="c-container absolute inset-0 flex flex-col gap-6 items-center justify-center text-center">
          <div className="font-anton text-pure-white text-[6vw] md:text-[3.5vw] lg:text-[3.5vw]">
            <span className="drop-shadow-md">
              Transform Your Ideas into Reality
            </span>
          </div>
          <p className="text-body-big text-pure-white drop-shadow-md hidden md:block">
            Let&apos;s work together to create a website <br />
            that not only stands out but also leaves a lasting impression.
            <br />
            We&apos;ll combine creativity, functionality, and
            <br />
            strategy to make your online presence truly unique and impactful.
          </p>
          <div className="flex gap-5">
            <Button variant="light" text="Contact me" href="" />
            <Button variant="transparent" text="Start a project" href="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBottomBanner;
