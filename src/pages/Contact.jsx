import ContactFormSection from "../Components/Contact/formSection";
import ContactHeroSection from "../Components/Contact/heroSection";

const ContactForm = () => {
  return (
    <div className="bg-white min-h-screen text-black font-sans text-lg mb-10">
      <ContactHeroSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactForm;
