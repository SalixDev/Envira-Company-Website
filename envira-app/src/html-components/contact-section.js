import ContactForm from "./contact-form";
import PhoneLeaf from "../SVGs/phone-leaf.svg"

const ContactSection = () => {
    return (
        <div className="flex justify-center items-center flex-col md:flex-row bg-enviraDarkOrange">
            <div className="flex">
            <ContactForm/>
            </div>
            <div className="w-[85%] md:w-[50%] bg-none mt-[-5vh] mb-4 md:my-10 md:mr-10">
                <img src= {PhoneLeaf} alt="contact us image" className="p-0 w-[100%] h-auto"/>
            </div>
        </div>
        );
    };

    export default ContactSection;
    