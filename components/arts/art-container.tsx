import { FunctionComponent } from "react";
import Button from "../commons/buttons/button";

const ArtContainer:FunctionComponent = () => {
  return (
    <section className="mx-auto">
      <div className="flex flex-col fixed justify-center items-start h-[100vh] w-[30%] top-0 overflow-visible">
        <h5 className="uppercase">gallery</h5>
        <div className="mt-0 mb-6">
          <span className="font-anton text-[3vw] text-neutral-900">
            Sketching the extraordinary.
          </span>
        </div>
        <div className="mb-6">
          <p className="text-body-base">
            Discover a gallery of expressive sketches and art that speaks
            louder than words. Each creation is a reflection of my passion
            and your inspiration.
          </p>
        </div>
        <div className="flex gap-5">
          <Button variant="dark" text="Contact me" href="" />
          <Button variant="light" text="Follow me on instagram" href="" />
        </div>
      </div>
      
    </section>
  );
};

export default ArtContainer;
