import { FunctionComponent } from "react";

const WhyProjectSection: FunctionComponent = () => {
  return (
    <section className="c-container mx-auto flex flex-col justify-center items-center md:justify-start md:items-start my-28 gap-5 md:h-auto md:w-[700px]">
      <h1 className="text-center md:text-start font-anton text-[5vw] md:text-[3vw] lg:text-[2.5vw]">
        You need more <br />
        than just a website.
      </h1>
      <div className="text-center md:text-start flex flex-col gap-7 text-body-base">
        <p>
          You need an engaging, high-performing digital presence that converts
          visitors into loyal customers.
        </p>
        <p>
          As an Artist and Frontend Developer, I create websites that are
          visually stunning, easy to use, and tailored to your needs. From
          unique designs to seamless user experiences, I bring your vision to
          life online.
        </p>
      </div>
    </section>
  );
};

export default WhyProjectSection;
