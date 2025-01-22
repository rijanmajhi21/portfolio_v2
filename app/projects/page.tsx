import Header from "@/components/header/header";
import ProjectBanner from "@/components/projects/project-banner";
import BottomBanner from "@/components/projects/Project-bottom-banner";
import WhyProjectSection from "@/components/projects/why-project-section";

export const metadata = {
  title: "Portfolio | Projects",
  description: "Showcasing my projects.",
};

const ProjectPage = () => {
  return (
    <section className="mx-auto">
      <Header />
      <>
        <div className="flex flex-col md:pb-72">
          <ProjectBanner />
          {/* <ProjectBannerSection /> */}
        </div>
        <WhyProjectSection />
        {/* <ProjectSection /> */}
        {/* <AboutProjectSection /> */}
        <BottomBanner />
      </>
    </section>
  );
};

export default ProjectPage;
