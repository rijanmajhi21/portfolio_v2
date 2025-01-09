import Header from "@/components/header/header";
import Home from "@/components/home-section/home";

export const metadata = {
  title: "Rijan | Portfolio",
  description: "Explore the creative work of Rijan Majhi, a frontend developer and artist.",
};

const HomePage = () => {
  return (
    <main className="c-container mx-auto">
      <Header />
      <Home />
    </main>
  );
};

export default HomePage;
