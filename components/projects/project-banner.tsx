import Button from "../commons/buttons/button";

const ProjectBottomBanner = () => {
  return (
      <div className="flex flex-col items-center justify-center mt-32 sm:mt-40 md:mt-40 lg:mt-[10%] pb-[5%]">
        <h5 className="uppercase text-center tracking-wider pb-2">
          frontend developer &nbsp; | &nbsp; art-inspired & designer
        </h5>
        <div className="pb-5 text-center">
          <span className="font-anton text-[6vw] md:text-[5vw] lg:text-[5vw] text-neutral-900 leading-snug">
            Creative coding and stunning visuals <br />
            Artistic websites for modern brands.
          </span>
        </div>
        <Button variant="light" text="Let's start a project together" href="" />
      </div>
  );
};

export default ProjectBottomBanner;
