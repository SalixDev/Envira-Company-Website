import "./styles.css";
import HeaderIntro from "./html-components/header-and-intro";
import Features from "./html-components/features";
import Companies from "./html-components/companies.js";
import Services from "./html-components/services-CTA";
import Articles from "./html-components/articles";
import ContactSection from "./html-components/contact-section";
import Footer from "./html-components/footer";

function App() {
  return (
    <div>
      <HeaderIntro/>
      <Features/>
      <Companies />
      <Services />
      <Articles/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;