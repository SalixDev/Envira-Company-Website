import "./styles.css";
import Home from "./pages/home";
import Operations from "./pages/operations";
import ContactSection from "./html-components/contact-section";

// import * as React from "react";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  //Contact us button smooth scroll function
  function goToContact() { window.scrollTo({ 
    top: contactForm.current.offsetTop, behavior: "smooth"
    });
  };
  function goToServices() { window.scrollTo({ 
    top: servicesSection.current.offsetTop, behavior: "smooth"
    });
  };
  const contactForm = useRef(null);
  const servicesSection = useRef(null);


  return (
    <div>
      
        <link rel="stylesheet" href="./styles.css" />
        <meta charSet="UTF-8" /> 
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ENVIRA</title>

        <Router>
            <div>
              {/* <Link to="/">Home</Link> */}
              {/* <Link to="/operations">Operations</Link> */}
            </div>

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/operations" element={<Operations/>}/>  
              <Route path="/C" element={<ContactSection/>}/>             
            </Routes>

        </Router>


    </div>
  );
}
