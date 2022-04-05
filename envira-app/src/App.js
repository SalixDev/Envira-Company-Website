import './App.css';
import "./styles.css";
import Truck from "./icons/truck.png";
import Cash from "./icons/cash.png";
import Clipboard from "./icons/clipboard.png";

function App() {
  return (
    <div>
    <link rel="stylesheet" href="./styles.css" />
    <meta charSet="UTF-8" /> 
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <div className="bac-img1-woman">{/* first background img */}
      <div className="bac-img2-lines">
        <div className="bac-overlay">      
          <div className="header-box"> {/* website header */}
            <div className="logo-container">
              <h3 className="logo">ENVIRA</h3>
              <p className="sub-logo">♻♻♻RECYCLING</p>
            </div>
            <div className="header-links">
              <p className="header-link1">Services</p>
              <p className="header-link2">Operations</p>
              <p className="header-link3">About</p>
            </div>
            <button className="contact-us">Contact Us</button>
          </div>
          <div className="intro"> 
            <div className="intro-container">
              <h1 className="slogan">Feel the Envira</h1>
              <h1 className="sub-slogan">Advantage.</h1>
              <p className="sub-text">
                A family owned company working with businesses to achieve waste reduction and increased recycling while saving you money.
              </p>
              <button className="button">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="body-1-features">
      <div className="all-cards-container">
        <div className="feature-card-container">
          <div className="feature-img-container-align">
            <div className="feature-img-container">
              <img className="clipboard" alt= "clipboard icon" src={Clipboard} />
            </div>
          </div>
          <div className="feature-text-container-align">
            <p className="feature-title">24 hour turnaround</p>
            <br />
            <p className="feature-subtext">We provide a quick turnaround to get your waste dealt with safely in a way that works around you.</p>
          </div>
        </div>
        <div className="feature-card-container">
          <div className="feature-img-container-align">
            <div className="feature-img-container">
              <img className="truck" alt = "truck icon" src={Truck} />
            </div>
          </div>
          <div className="feature-text-container-align">
            <p className="feature-title">We deal with all types of waste.</p>
            <p className="feature-subtext">We deal with mix loads of waste, meaning you only need to book one job with us, we'll sort the rest.</p>
          </div>
        </div>
        <div className="feature-card-container">
          <div className="feature-img-container-align">
            <div className="feature-img-container">
              <img className="cash" alt = "cash icon" src={Cash} />
            </div>
          </div>
          <div className="feature-text-container-align">
            <p className="feature-title">Trade in you waste for cash.</p>
            <p className="feature-subtext">Everyone loves cash, that's why WE pay YOU for your waste.</p>
            <p className="fine-print">*Evaluation given upon booking</p>
          </div>
        </div>
      </div>
    </div>
    <div className="body-2-quote">
      <div className="quote-box">
        <p className="quote-text">
          This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.
        </p>
        <p className="quote-author">
          -Thor, God of Thunder
        </p>
      </div>
    </div>
    <div className="body-3">
      <div className="cta-container">
        <div className="cta-left-container">
          <p className="cta-header">Call to action! It's time!</p>
          <p className="cta-subtext"> Sign up for our product by clicking that button right over there!</p>
        </div>
        <button className="button"> Sign up</button>
      </div>
    </div>
    <div className="footer-box">
      <p className="copyright"> Copyright © Kiwimoto 2021</p>
    </div>
  </div>
  );
}

export default App;
