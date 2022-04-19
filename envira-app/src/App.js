import "./styles.css";
import Intro from "./html-components/intro";
import Features from "./html-components/features";
import Companies from "./html-components/companies.js";
import Services from "./html-components/services-CTA";
import Articles from "./html-components/articles";
import ContactSection from "./html-components/contact-section";
import Footer from "./html-components/footer";
import { useRef } from "react";


function App() {

  //Contact us button smooth scroll function
  function goToContact () { window.scrollTo({ 
    top: contactForm.current.offsetTop, behavior: "smooth"
    });
  };
  const contactForm = useRef(null);

  return (
    <div>
      <div>
        <link rel="stylesheet" href="./styles.css" />
        <meta charSet="UTF-8" /> 
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ENVIRA</title>
            <div className="header">
              <div className="header-box"> {/* website header */}
                <div className="logo-container">
                  <h3 className="logo">ENVIRA</h3>
                  <h3 className="sub-logo">♻ RECYCLING</h3>
                </div>
                <div className="header-links">
                  <p className="header-link1">Services</p>
                  <p className="header-link2">Operations</p>
                  <p className="header-link3">About</p>
                </div>
                <button onClick={goToContact}>Contact Us</button>
              </div>
            </div>
        <Intro/>
      </div>
      <Features/>
      <Companies />
      <Services />
      <Articles/>
      <div  ref={contactForm}/> {/*contact us button reference*/}
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;