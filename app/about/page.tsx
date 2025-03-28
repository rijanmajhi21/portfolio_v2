import AboutBannerSection from "@/components/about/about-banner-section";
import AboutSection from "@/components/about/about-section";
import SkillSection from "@/components/about/skills-section";
import Header from "@/components/header/header";

export const metadata = {
  title: "Portfolio | About",
  description: "About me.",
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutBannerSection />
      <AboutSection />
      <SkillSection />
    </>
  );
};

export default AboutPage;
