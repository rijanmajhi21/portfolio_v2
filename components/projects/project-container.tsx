import Image from "next/image";

type ProjectContainerProps = {
  src: string;
  alt: string;
  title: string;
  className?: string;
};

const ProjectContainer = ({
  src,
  alt,
  title,
  className = "",
}: ProjectContainerProps) => {
  return (
    <div
      className={`relative rounded-3xl w-full md:w-[380px] h-[550px] shadow-lg overflow-hidden group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <div className="absolute bottom-8 left-4 text-white font-anton text-[6vw] sm:text-[5vw] md:text-[3vw] lg:text-[2vw] opacity-90 drop-shadow-lg">
        {title}
      </div>
    </div>
  );
};

export default ProjectContainer;
