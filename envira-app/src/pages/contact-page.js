import Navbar from "../html-components/navbar";
import ContactSection from "../html-components/contact-section";
import Footer from "../html-components/footer";

const ContactPage = () => {
    return (
        <div>
            <Navbar/>
             {/*contact us button reference*/}
            <ContactSection/>
            <Footer/>
        </div>
    );
};

export default ContactPage;