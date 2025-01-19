import { FunctionComponent } from "react";
import ProjectContainer from "./project-container";

const PojectSection: FunctionComponent = () => {
  const images = [
    {
      src: "/images/project-images/cms3.png",
      alt: "Customer Management System",
      title: "Customer Management System",
      link: "",
    },
    {
      src: "/images/project-images/prototype.png",
      alt: "Prototyping",
      title: "Sketching Prototype",
      link: "",
    },
    {
      src: "/images/project-images/pf.png",
      alt: "Portfolio",
      title: "Portfolio",
      link: "",
    },
    
  ];

  return (
    <section className="h-auto bg-neutral-900">
      <div className="c-container flex flex-col py-10 md:py-20 gap-6">
        <div className="flex justify-between pb-2 md:pb-6">
          <div className="justify-start">
            <span className="font-anton text-[3vw] text-pure-white">
              Latest Projects
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-2 md:gap-8">
          {images.map((image, index) => (
            <ProjectContainer key={index} src={image.src} alt={image.alt} title={image.title} link={image.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PojectSection;
