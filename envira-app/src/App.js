import "./styles.css";
import HeaderIntro from "./html-components/header-and-intro";
import Features from "./html-components/features";
import Companies from "./html-components/companies.js";
import Services from "./html-components/services-CTA";
import Articles from "./html-components/articles";
import Quote from "./html-components/quote-filler";
import CTA from "./html-components/CTA-filler";
import Footer from "./html-components/footer";

function App() {
  return (
    <div>
      <HeaderIntro/>
      <Features/>
      <Companies />
      <Services />
      <Articles/>
      <Quote/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;