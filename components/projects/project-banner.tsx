import Button from "../commons/buttons/button";

const ProjectBanner = () => {
  return (
    <section className="mx-auto">
      <div className="flex flex-col items-center justify-center pt-[12%] pb-[5%]">
        <h5 className="uppercase tracking-wider">
          frontend developer &nbsp; | &nbsp; art-inspired & designer
        </h5>
        <div className="pb-6">
          <span className="font-anton text-[5vw] text-neutral-900">
            Creative coding and stunning visuals <br />
            Artistic websites for modern brands.
          </span>
        </div>
        <Button variant="light" text="Let's atart a project together" href="" />
      </div>
    </section>
  );
};

export default ProjectBanner;
