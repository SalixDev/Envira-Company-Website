import Truck from "../icons/truck.png";
import Cash from "../icons/cash.png";
import Clipboard from "../icons/clipboard.png";
import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect (() => {
    Aos.init({ duration: 700 });
  }, []);
    return (
        <div className="body-1-features" >
        <div className="all-cards-container" data-aos="fade-up">
          <div className="feature-card-container">
            <div className="feature-img-container-align">
              <div className="feature-img-container">
                <img className="clipboard" alt= "clipboard icon" src={Clipboard} />
              </div>
            </div>
            <div className="feature-text-container-align">
              <p className="feature-title">24 hour turnaround</p>
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
              <p className="fine-print">Evaluation given upon booking</p>
            </div>
          </div>
        </div>
      </div>  
        );
    };

    export default Features;