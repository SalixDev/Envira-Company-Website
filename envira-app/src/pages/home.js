import Navbar from "../html-components/navbar";
import Intro from "../html-components/intro";
import Features from "../html-components/features";
import Companies from "../html-components/companies.js";
import Services from "../html-components/services-CTA";
import Articles from "../html-components/articles";
import ContactSection from "../html-components/contact-section";
import Footer from "../html-components/footer";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar/>
                <Intro/>
            </div>
            <Features/>
            <Companies />
            {/* <div  ref={servicesSection}/>  */}
            {/*contact us button reference*/}
            <Services />
            <Articles/>
            {/* <div  ref={contactForm}/> */}
             {/*contact us button reference*/}
            <ContactSection/>
            <Footer/>
        </div>
    );
};

export default Home;