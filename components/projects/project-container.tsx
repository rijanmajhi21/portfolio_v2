import Image from "next/image";
import Link from "next/link";

type ProjectContainerProps = {
  src: string;
  alt: string;
  title: string;
  link: string;
  className?: string;
};

const ProjectContainer = ({
  src,
  alt,
  title,
  link,
  className = "",
}: ProjectContainerProps) => {
  return (
    <div
      className={`relative rounded-3xl w-full shadow-lg overflow-hidden group ${className}`}
    >
      <Link href={link}>
        <Image
          src={src}
          alt={alt}
          height={1200}
          width={600}
          className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </Link>
      <div className="hidden md:flex absolute bottom-8 left-4 text-white font-anton text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] opacity-90 drop-shadow-lg">
        {title}
      </div>
    </div>
  );
};

export default ProjectContainer;
