import ArtContainer from "@/components/arts/art-container";
import ArtGallery from "@/components/arts/gallery";
import Header from "@/components/header/header";

export const metadata = {
  title: "Portfolio | Arts",
  description: "Showcasing my art gallery.",
};

const ArtPage = () => {
  return (
    <main className="c-container mx-auto">
      <Header />
      <>
        <ArtContainer />
        <ArtGallery />
      </>
    </main>
  );
};

export default ArtPage;
