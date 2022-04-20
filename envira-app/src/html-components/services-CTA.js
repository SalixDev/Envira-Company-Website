import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect (() => {
    Aos.init({ duration: 600 });
  }, []);
  
    return (
        <div className="TDriver h-auto" data-aos="fade" data-aos-once>
                <div className="Gradient flex items-center md:justify-start justify-center">
                <div className="w-[450px] md:h-96 h-auto flex flex-col gap-2
                md:mx-20 mx-5 my-5 justify-center md:items-start items-center" data-aos="fade-right" data-aos-delay="200" data-aos-once>
                        <div className="text-white font-sfproMed text-5xl md:text-left text-center">Saving the nations pockets & the planet</div>
                        <div className="text-white text-sm md:text-left text-center mb-4">At ENVIRA we treat each customer as an individual, as we have found that no two businesses are alike in their specific recycling requirements. Through a free site survey, a detailed recycling proposal will be produced for your site. This will outline landfill reduction and gaining the most from your companies' valuable commodities.</div>
                        <button>Services</button>
                    </div>
                </div>
            </div>
        );
    };

    export default Services;