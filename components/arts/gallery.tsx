import Image from "next/image";
import Link from "next/link";

const ArtGallery = () => {
  return (
    <section className="c-container mx-auto">
      <div className="block absolute h-full w-1/2 top-[20vh] left-auto right-[0%] overflow-visible">
        <div className="cursor-pointer transition-all">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 pb-12">
            <div className="flex relative rounded-2xl overflow-hidden h-[355] w-[282]">
              <Link href="">
                <Image
                  src="/images/art-gallery/sketch.jpg"
                  alt="Sketch"
                  height={355}
                  width={282}
                />
              </Link>
            </div>
            <div className="flex relative rounded-2xl overflow-hidden h-full w-[282]">
              <Link href="">
                <Image
                  src="/images/art-gallery/sketch.jpg"
                  alt="Sketch"
                  height={355}
                  width={282}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
