import { FunctionComponent } from "react";
import Button from "../commons/buttons/button";

const Home: FunctionComponent = () => {
  return (
    <section className="c-container px-0 mx-auto h-[100vh] my-0 flex fixed inset-[0%] overflow-hidden">
      <div className="flex flex-col justify-center h-[100vh] mx-auto">
        <div className="flex flex-col mb-10 overflow-hidden">
          <span className="text-title-5 text-center">
            👋, my name is Rijan and I am a frontend developer
          </span>
          <div className="flex flex-col mt-5 text-center group w-full pb-2">
            <span className="font-anton mx-auto text-[11vw] text-neutral-900 leading-[1.15] group-hover:text-stroke cursor-pointer transition-all duration-300">
              Frontend
            </span>
            <span className="block whitespace-nowrap font-anton mx-auto text-[11vw] text-stroke leading-[1.15] group-hover:text-neutral-900 hover:text-neutral-900 transition-all duration-300 cursor-pointer">
              & Art Enthusiast
            </span>
          </div>
          <div className="flex">
            <span className="text-title-5">based in Kathmandu, Nepal.</span>
          </div>
        </div>
        <div className="absolute flex items-center bottom-24 gap-5 left-1/2 transform -translate-x-1/2 z-10">
          <Button variant="dark" text="You need a developer" href="" />
          <Button variant="light" text="You need an artist" href="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
