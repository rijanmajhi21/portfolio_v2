"use client";
import Image from "next/image";
import { FunctionComponent } from "react";

const BottomBanner: FunctionComponent = () => {
  return (
    <section className="flex flex-col">
      <div className="relative h-[190px] w-full overflow-hidden xs:h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px] ">
        <Image
          src="/images/coding.png"
          alt="Bottom Banner Image"
          className="absolute inset-0 h-full w-full object-cover"
          layout="fill"
          priority
        />
        <div className="c-container absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="font-anton text-pure-white text-[3vw]">
            <span>Let&apos;s meet</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
