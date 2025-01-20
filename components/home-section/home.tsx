"use client";

import clsx from "clsx";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import Button from "../commons/buttons/button";

const Home: FunctionComponent = () => {
  const [hovered, setHovered] = useState<"frontend" | "art" | null>(null);

  return (
    <section className="c-container mx-auto top-24 xs:top-28 sm:top-32 md:top-[20%] px-0 left-0 right-0 flex sm:flex-none justify-center items-center fixed lg:inset-[0%] overflow-hidden">
      <div className="flex flex-col gap-[5%] items-center justify-center pb-[78%] xs:pb-[40%] sm:pb-[20%] md:pb-0 px-4 mx-0 lg:mx-auto lg:py-1/2">
        <div className="flex flex-col mb-4 overflow-hidden">
          <span className="text-body-base md:text-body-big-bold lg:text-title-5 text-center mt-8">
            👋, my name is Rijan and I am a frontend developer
          </span>
          <div className="flex flex-col mt-5 text-center w-full pb-2">
            <Link href="/projects">
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
            </Link>
            <Link href="/arts">
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
            </Link>
          </div>
          <div className="flex justify-center md:justify-start">
            <span className="text-body-base md:text-body-base-bold lg:text-title-5">
              based in Kathmandu, Nepal.
            </span>
          </div>
        </div>
        {/* <Image
        src="/images/img1.png"
        alt="Profile"
        height={1200}
        width={600}
        className="absolute"
      /> */}
        <div className="flex flex-col sm:flex-row items-center bottom-24 gap-5 transform z-10">
          <Button variant="dark" text="Hire as artist" href="arts" />
          <Button variant="light" text="Hire as developer" href="/projects" />
        </div>
      </div>
    </section>
  );
};

export default Home;
