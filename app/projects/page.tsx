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
    <main className="mx-auto">
      
      <Header />
      <>
        <ProjectBanner />
        <WhyProjectSection />
        <BottomBanner />
      </>
    </main>
  );
};

export default ProjectPage;
