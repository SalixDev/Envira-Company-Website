import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import Enter from "../SVGs/enter.svg";

const ContactSection = () => {
    

    return (
        <div id='intro' className="contact-container">
            <ContactForm/>
            <div className="contact-right">
                <ContactInfo/>
                <img src= {Enter} alt="contact us" className="md:p-0 pt-5 w-[100%] h-auto md:ml-8"/>
            </div>
        </div>
        );
    };

export default ContactSection;
    