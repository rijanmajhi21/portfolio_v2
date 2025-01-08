import Footer from "@/components/footer/footer";
import { ReactNode } from "react";
const Projects = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
export default Projects;
