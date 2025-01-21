import { FunctionComponent } from "react";

const AboutSection: FunctionComponent = () => {
  return (
    <section className="c-container mx-auto flex flex-col justify-center items-center md:justify-start md:items-start my-28 gap-5 md:h-auto md:w-[700px]">
      <h1 className="text-center md:text-start font-anton text-[5vw] md:text-[3vw] lg:text-[2.5vw]">
        I design websites and visuals with precision and creativity.
      </h1>
      <div className="text-center md:text-start flex flex-col gap-7 text-body-base">
        <p>
          With a love for art, design, and crafting digital experiences, I enjoy
          collaborating with people who appreciate aesthetics, value simplicity,
          and understand the importance of delivering an outstanding user
          experience.
        </p>
        <p>
          By placing your vision and identity at the core of my creative
          process, I strive to provide clear, thoughtful, and impactful
          solutions tailored to your needs.
        </p>
        <p>
          Clients appreciate my attention to detail, adaptability, and seamless
          communication. (Oh, and they also rave about my chai tea—it&apos;s all
          about the perfect balance of spices!)
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
