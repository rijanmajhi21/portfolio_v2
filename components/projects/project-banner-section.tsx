import Image from "next/image";
import Link from "next/link";

const ProjectBannerSection = () => {
  return (
    <section className="items-center justify-center mt-0 w-full min-h-[20em] hidden md:flex">
      <div className="w-[115%] mx-auto absolute flex items-center justify-center">
        <div className="transform translate-y-[4.30692em] scale-100 rounded-lg relative overflow-hidden mx-2.5 items-center justify-center shadow-2xl">
          <Link href="">
            <Image
              src="/images/project-images/kindship.png"
              alt="Kindship"
              className="rounded-lg inline-block items-center"
              height={1000}
              width={500}
            />
          </Link>
        </div>
        <div className="transform translate-y-[2.84782em] scale-100 [transform-style:preserve-3d] [will-change:transform] top-[4.44em] rounded-lg relative overflow-hidden mx-2.5 items-center justify-center shadow-2xl">
          <Link href="">
            <Image
              src="/images/project-images/card.png"
              alt="Invitation-Card"
              className="rounded-lg inline-block items-center"
              height={1000}
              width={500}
            />
          </Link>
        </div>
        <div className="transform translate-y-[1.42391em] scale-100 [transform-style:preserve-3d] [will-change:transform] top-[8.89em] rounded-lg relative overflow-hidden mx-2.5 items-center justify-center shadow-2xl">
          <Link href="">
            <Image
              src="/images/project-images/cms.png"
              alt="Customer Management System"
              className="rounded-lg inline-block items-center"
              height={1000}
              width={500}
            />
          </Link>
        </div>
        <div className="transform translate-y-0 scale-100 [transform-style:preserve-3d] top-[13.33em] rounded-lg relative overflow-hidden mx-2.5 items-center justify-center shadow-2xl">
          <Link href="">
            <Image
              src="/images/project-images/sketching.png"
              alt="Sketching"
              className="rounded-lg inline-block items-center"
              height={1000}
              width={500}
            />
          </Link>
        </div>
        <div className="transform translate-y-[1.42391em] scale-100 [transform-style:preserve-3d] [will-change:transform] top-[8.89em] rounded-lg relative overflow-hidden mx-2.5 items-center justify-center shadow-2xl">
          <Link href="">
            <Image
              src="/images/project-images/darvis.png"
              alt="Darvis"
              className="rounded-lg inline-block items-center"
              height={1000}
              width={500}
            />
          </Link>
        </div>
        <div className="transform translate-y-[2.84782em] scale-100 [transform-style:preserve-3d] [will-change:transform] top-[4.44em] rounded-lg relative overflow-hidden mx-2.5 items-center justify-center shadow-2xl">
          <Link href="">
            <Image
              src="/images/project-images/flyer.jpg"
              alt="Flyer"
              className="rounded-lg inline-block items-center"
              height={1000}
              width={500}
            />
          </Link>
        </div>
        <div className="transform translate-y-[4.27493em] scale-100 [transform-style:preserve-3d] [will-change:transform] rounded-lg relative overflow-hidden mx-2.5 items-center justify-center shadow-2xl">
          <Link href="">
            <Image
              src="/images/project-images/portfolio1.png"
              alt="Portfolio"
              className="rounded-lg inline-block items-center"
              height={1000}
              width={500}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectBannerSection;
