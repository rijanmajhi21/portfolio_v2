import { image1, image2 } from "@/constants/gallery-image";
import GalleryImage from "../commons/image/gallery-image";


const ArtGallery = () => {
  return (
    <div className="relative mt-0 t-0 w-full md:absolute md:left-auto md:right-[0%] h-auto md:top-[20vh] md:w-1/2 overflow-visible mb-6">
      <div className="relative block w-full h-full">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 cursor-pointer transition-all gap-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 pb-12">
            {image1.map((image1, index) => (
              <div key={index} className="bg-none bg-auto">
                <GalleryImage
                  src={image1.src}
                  alt={image1.alt}
                  title={image1.title}
                  href={image1.href}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 pb-12">
            {image2.map((image2, index) => (
              <div key={index} className="bg-none bg-auto">
                <GalleryImage
                  src={image2.src}
                  alt={image2.alt}
                  title={image2.title}
                  href={image2.href}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtGallery;
