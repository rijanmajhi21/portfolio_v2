import Header from "@/components/header/header";
import Home from "@/components/home-section/home";
import Head from "next/head";

export const metadata = {
  title: "Rijan | Portfolio",
  description:
    "Explore the creative work of Rijan Majhi, a frontend developer and artist.",
  icons: {
    icon: "/favicon.png",
  },
};

const HomePage = () => {
  return (
    <main className="c-container mx-auto">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Header />
      <Home />
    </main>
  );
};

export default HomePage;
