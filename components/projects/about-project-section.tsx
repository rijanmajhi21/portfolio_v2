import Image from "next/image";
import { FunctionComponent } from "react";

const AboutProjectSection: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <TopSection />
      <BottomSection />
    </div>
  );
};

export default AboutProjectSection;

const TopSection: FunctionComponent = () => {
  return (
    <div className="c-container flex gap-16 py-24 items-center justify-center mx-auto">
      <div className="flex flex-col items-start w-[50%] justify-center">
        <h5 className="uppercase">Seamless Web Experiences</h5>
        <div className="mt-0 md:mb-4 mb-3">
          <span className="text-center md:text-start font-anton text-[5vw] md:text-[3vw] lg:text-[2.5vw]">
            Design Meets Functionality
          </span>
        </div>
        <div className="mb-6 flex flex-col gap-4 text-center md:text-start text-body-base md:text-body-big">
          <p className="">
            A great website is more than just looks—it&apos;s about creating
            meaningful user experiences.
          </p>
          <p>
            I design responsive, user-friendly websites that balance creativity
            and technical precision. Each element is crafted to engage your
            audience and deliver value effectively.
          </p>
        </div>
      </div>
      <div className="flex relative w-[50%] mx-auto items-center justify-center">
        <Image
          src="/images/project-images/laptop.png"
          alt="Laptop"
          className="rounded-lg inline-block items-center"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

const BottomSection: FunctionComponent = () => {
  return (
    <div className="c-container flex gap-16 py-24 items-center justify-center mx-auto">
      <div className="flex relative w-[40%] mx-auto items-center justify-center">
        <Image
          src="/images/project-images/mobile.png"
          alt="Laptop"
          className="rounded-lg inline-block items-center"
          height={1000}
          width={500}
        />
      </div>
      <div className="flex flex-col items-start w-[60%] justify-center">
        <h5 className="uppercase">Creative Excellence</h5>
        <div className="mt-0 md:mb-4 mb-3">
          <span className="text-center md:text-start font-anton text-[5vw] md:text-[3vw] lg:text-[2.5vw]">
            Where Imagination Meets Creativity
          </span>
        </div>
        <div className="mb-6 flex flex-col gap-4 text-center md:text-start text-body-base md:text-body-big">
          <p>
            Every masterpiece begins with a vision, and I aim to bring that
            vision to life.
          </p>
          <p>
            I specialize in crafting visuals that capture attention and leave a
            lasting impression. By turning ideas into designs that stand out, I
            ensure each creation resonates with your audience.
          </p>
        </div>
      </div>
    </div>
  );
};
