import AboutBannerSection from "@/components/about/about-banner-section";
import AboutSection from "@/components/about/about-section";
import Header from "@/components/header/header";

export const metadata = {
  title: "Portfolio | About",
  description: "About me.",
};

const AboutPage = () => {
  return (
    <main className="mx-auto">
      <Header />
      <AboutBannerSection />
      <AboutSection />
    </main>
  );
};

export default AboutPage;
