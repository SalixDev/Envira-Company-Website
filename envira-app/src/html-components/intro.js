import BGWoman from "../SVGs/credit-card.svg"
import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {

  useEffect (() => {
    Aos.init({ duration: 600 });
  }, []);

    return (

        <div className="hero">
        <div className="hero-inner"> 
          <div className="intro-text-container" data-aos="fade-right">
            <h1 className="slogan">Feel the Envira</h1>
            <h1 className="sub-slogan">Advantage.</h1>
            <div  data-aos="fade-right" data-aos-delay="200">

            <p className="sub-text">
            A family owned company working with businesses to achieve waste reduction and increased recycling while saving you money.
            </p>
            <button className="button" >About Us</button>
            </div>
            
          </div>
          <div className="bg-img1-woman-container">
            <img className="bg-img1-woman" src={BGWoman} data-aos="fade-left" data-aos-delay="100"/>
          </div>
        </div>
      </div>
        );
    };

    export default Intro;