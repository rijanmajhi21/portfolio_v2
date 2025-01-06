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
    <div className="relative w-full h-full overflow-hidden rounded-2xl group">
      <Link href={href}>
        <div className="relative w-full h-full transform transition-all duration-500 ease-in-out group-hover:scale-110">
          <Image
            src={src}
            alt={alt}
            layout="responsive"
            width={600}
            height={400}
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="absolute bottom-3 left-4 text-white font-anton text-[28px] opacity-90">
        {title}
      </div>
    </div>
  );
};

export default GalleryImage;
