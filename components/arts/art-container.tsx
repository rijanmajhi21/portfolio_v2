import { FunctionComponent } from "react";
import Button from "../commons/buttons/button";

const ArtContainer: FunctionComponent = () => {
  return (
    <div className="flex flex-col md:fixed relative justify-center md:items-start items-center md:h-[100vh] h-auto mt-32 xs:mt-[20%] md:mt-0 md:w-[30%] w-full top-0 overflow-visible">
      <h5 className="uppercase">gallery</h5>
      <div className="mt-0 md:mb-6 mb-3">
        <span className="font-anton text-[6vw] md:text-[3.5vw] lg:text-[3.5vw] text-neutral-900">
          Sketching the extraordinary.
        </span>
      </div>
      <div className="mb-6 flex text-center md:text-start">
        <p className="text-body-base">
          Discover a gallery of expressive sketches and art that speaks louder
          than words. Each creation is a reflection of my passion and your
          inspiration.
        </p>
      </div>
      <div className="flex gap-5">
        <Button variant="light" text="Follow me on instagram" href="" />
      </div>
    </div>
  );
};

export default ArtContainer;
