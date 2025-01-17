import Header from "@/components/header/header";
import ProjectBanner from "@/components/projects/project-banner";
import ProjectBannerSection from "@/components/projects/project-banner-section";
import BottomBanner from "@/components/projects/Project-bottom-banner";
import PojectSection from "@/components/projects/project-section";
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
          <ProjectBannerSection/>
        </div>
        <WhyProjectSection />
        <PojectSection />
        <BottomBanner />
      </>
    </section>
  );
};

export default ProjectPage;
