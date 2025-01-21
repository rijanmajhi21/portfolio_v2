import { FunctionComponent } from "react";

const AboutBannerSection: FunctionComponent = () => {
  return (
    <div className="c-container mx-auto">
      <div className="flex mx-auto flex-col my-32">
        <div className="flex flex-col gap-1 text-center justify-center">
          <span className="uppercase text-center tracking-widest pb-2">
            Let&apos;s get to know each other
          </span>
          <span className="font-anton text-[8vw] md:text-[8vw] lg:text-[8vw] text-neutral-900">
            About
          </span>
          {/* <div className="relative flex items-center justify-center">
            <Image
              src="/images/img1.png"
              alt="Profile"
              height={1200}
              width={600}
              className=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutBannerSection;
