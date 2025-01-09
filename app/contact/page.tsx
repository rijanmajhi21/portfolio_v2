import ContactContainer from "@/components/contact/contact-container";
import ContactForm from "@/components/contact/contact-form";
import Header from "@/components/header/header";

export const metadata = {
  title: "Portfolio | Contact",
  description: "Contact me",
};

const ContactPage = () => {
  return (
    <main className="c-container mx-auto">
      <Header />
      <div className="flex">
        <div className="w-full">
          <ContactContainer />
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
