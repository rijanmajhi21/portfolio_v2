import GalleryImage from "../commons/image/gallery-image";

const image1 = [
  { src: "/images/art-gallery/sketch.jpg", alt: "Realism", title: "Realism", href: "" },
  { src: "/images/art-gallery/upper-moon-one.jpg", alt: "Acrylic", title: "UpperMoon 1", href: "" },
  { src: "/images/art-gallery/itachi.jpg", alt: "Itachi", title: "Itachi", href: "" },
  { src: "/images/art-gallery/watercolor.jpg", alt: "watercolor", title: "Watercolor", href: "" },
];

const image2 = [
  { src: "/images/art-gallery/raiden-shougan.jpg", alt: "Raiden Shougan", title: "Raiden Shougan", href: "" },
  { src: "/images/art-gallery/hers.jpg", alt: "Kokushibo", title: "Hers", href: "" },
  { src: "/images/art-gallery/hentai.jpg", alt: "Hentai", title: "Hentai", href: "" },
  { src: "/images/art-gallery/gojo.jpg", alt: "gojo", title: "Gojo Satorou", href: "" },
];

const ArtGallery = () => {
  return (
    <section className="mx-auto">
      <div className="flex justify-end">
        <div className="w-full lg:w-1/2">
          <div className="relative block w-full h-full top-[20vh] overflow-visible">
            <div className="grid grid-cols-2 cursor-pointer transition-all gap-8">
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
      </div>
    </section>
  );
};

export default ArtGallery;
