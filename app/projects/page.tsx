import Header from "@/components/header/header";
import ProjectBanner from "@/components/projects/project-banner";
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
        <ProjectBanner />
        <WhyProjectSection />
        <PojectSection />
        <BottomBanner />
      </>
    </section>
  );
};

export default ProjectPage;
