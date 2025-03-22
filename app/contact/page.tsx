import ContactContainer from "@/components/contact/contact-container";
import ContactForm from "@/components/contact/contact-form";
import Header from "@/components/header/header";

export const metadata = {
  title: "Portfolio | Contact",
  description: "Contact me",
};

const ContactPage = () => {
  return (
    <section className="c-container mx-auto">
      <Header />
      <div className="flex flex-col relative md:flex-none justify-between gap-8">
        <ContactContainer />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
