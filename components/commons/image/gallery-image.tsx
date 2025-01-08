import Image from "next/image";
import Link from "next/link";

type GalleryImageProps = {
  src: string;
  alt: string;
  title: string;
  href: string;
};

const GalleryImage = ({ src, alt, title, href }: GalleryImageProps) => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl group">
      <Link href={href}>
        <div className="relative w-full pb-[100%] hover:pb-[120%] transition-all duration-500 ease-in-out group-hover:scale-110">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </Link>
      <div className="absolute bottom-4 left-4 text-white font-anton text-sm sm:text-lg md:text-xl lg:text-2xl opacity-90">
        {title}
      </div>
    </div>
  );
};

export default GalleryImage;
