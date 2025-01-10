"use client";

import clsx from "clsx";
import { FunctionComponent, useState } from "react";
import Button from "../commons/buttons/button";

const Home: FunctionComponent = () => {
  const [hovered, setHovered] = useState<"frontend" | "art" | null>(null);

  return (
    <section className="c-container mx-auto lg:h-[100vh] px-0 flex justify-center fixed inset-[0%] overflow-hidden">
      <div className="flex flex-col pb-[78%] xs:pb-[40%] sm:pb-[20%] md:pb-0 px-4 justify-center mx-0 lg:mx-auto lg:h-[100vh]">
        <div className="flex flex-col mb-10 overflow-hidden">
          <span className="text-body-big sm:text-body-big-bold md:text-title-5 text-center">
            👋, my name is Rijan and I am a frontend developer
          </span>
          <div className="flex flex-col mt-5 text-center w-full pb-2">
            <span
              className={clsx(
                "font-anton mx-auto text-[13vw] md:text-[13vw] xl:text-[11vw] leading-[1.15] cursor-pointer transition-all duration-300",
                {
                  "text-neutral-900":
                    hovered === "frontend" || hovered === null,
                  "text-stroke": hovered === "art",
                }
              )}
              onMouseEnter={() => setHovered("frontend")}
              onMouseLeave={() => setHovered(null)}
            >
              Frontend
            </span>
            <span
              className={clsx(
                "block whitespace-nowrap font-anton mx-auto text-[13vw] md:text-[13vw] xl:text-[11vw] leading-[1.15] cursor-pointer transition-all duration-300",
                {
                  "text-neutral-900": hovered === "art",
                  "text-stroke": hovered !== "art",
                }
              )}
              onMouseEnter={() => setHovered("art")}
              onMouseLeave={() => setHovered(null)}
            >
              & Art Enthusiast
            </span>
          </div>
          <div className="flex justify-center md:justify-start">
            <span className="text-body-big sm:text-body-big-bold md:text-title-5">
              based in Kathmandu, Nepal.
            </span>
          </div>
        </div>
        <div className="absolute flex  flex-col sm:flex-row items-center bottom-24 gap-5 left-1/2 transform -translate-x-1/2 z-10">
          <Button variant="dark" text="You need an artist" href="" />
          <Button variant="light" text="You need a developer" href="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
