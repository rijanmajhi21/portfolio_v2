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
      <div className="flex flex-col relative md:flex-none justify-between gap-8">
        <ArtContainer />
        <ArtGallery />
      </div>
    </main>
  );
};

export default ArtPage;
