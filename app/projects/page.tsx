import BottomBanner from "@/components/footer/bottom-banner";
import Header from "@/components/header/header";
import ProjectBanner from "@/components/projects/project-banner";

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
        <BottomBanner />
      </>
    </main>
  );
};

export default ProjectPage;
