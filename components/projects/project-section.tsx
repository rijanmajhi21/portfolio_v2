import { FunctionComponent } from "react";
import ProjectContainer from "./project-container";

const PojectSection: FunctionComponent = () => {
  const images = [
    {
      src: "/images/project-images/cms1.png",
      alt: "Customer Management System 1",
      title: "Customer Management System",
    },
    {
      src: "/images/project-images/portfolio.png",
      alt: "Portfolio",
      title: "Portfolio",
    },
    {
      src: "/images/project-images/cms1.png",
      alt: "Customer Management System 3",
      title: "Customer Management",
    },
  ];

  return (
    <section className="h-auto bg-neutral-900">
      <div className="c-container flex flex-col py-20 gap-6">
        <div className="flex justify-between pb-6">
          <div className="justify-start">
            <span className="font-anton text-[3vw] text-pure-white">
              Latest Projects
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          {images.map((image, index) => (
            <ProjectContainer key={index} src={image.src} alt={image.alt} title={image.title}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PojectSection;
