import GalleryImage from "../commons/image/gallery-image";

const images = [
  { src: "/images/art-gallery/sketch.jpg", alt: "Sketch", title: "Sketch", href: "/sketch" },
  { src: "/images/art-gallery/acrylic.jpg", alt: "Acrylic", title: "Acrylic", href: "/acrylic" },
  { src: "/images/art-gallery/kokushibo.jpg", alt: "Kokushibo", title: "Kokushibo", href: "/kokushibo" },
  { src: "/images/art-gallery/raiden-shougan.jpg", alt: "Raiden Shougan", title: "Raiden Shougan", href: "/raiden-shougan" },
];

const ArtGallery = () => {
  return (
    <section className="mx-auto">
      <div className="flex justify-end">
        <div className="w-full lg:w-1/2">
          <div className="relative block w-full h-full top-[20vh] overflow-visible">
            <div className="cursor-pointer transition-all">
              <div className="grid grid-cols-2 gap-x-8 gap-y-8 pb-12">
                {images.map((image, index) => (
                  <div key={index} className="bg-none bg-auto">
                    <GalleryImage
                      src={image.src}
                      alt={image.alt}
                      title={image.title}
                      href={image.href}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
