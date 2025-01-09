import Header from "@/components/header/header";
import { ReactNode } from "react";

const ContactUsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default ContactUsLayout;
