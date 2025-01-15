import Header from "@/components/header/header";
import ProjectBanner from "@/components/projects/project-banner";
import BottomBanner from "@/components/projects/Project-bottom-banner";
import WhyProjectSection from "@/components/projects/why-project-section";
import Head from "next/head";

export const metadata = {
  title: "Portfolio | Projects",
  description: "Showcasing my projects.",
};

const ProjectPage = () => {
  return (
    <main className="mx-auto">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
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
