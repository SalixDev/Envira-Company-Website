import Humbolt from "../logos/Humbolt.png";
import LaCroix from "../logos/Lacroix.png";
import Stormcloud from "../logos/Stormcloud.png";
import Basf from "../logos/BASF.png";
import Proterra from "../logos/Proterra.png";

const Companies = () => {
    return (
        <div className = "flex flex-col justify-center items-center bg-whiteSmoke">
            <h1 className = "container text-enviraOrange font-sfproBold text-2xl">We work with</h1>
            <div className = "flex flex-row justify-center items-center md:gap-6 gap-1 md:mx-16 mx-8 md:my-5 my-3">
                <div className="container">
                    <img alt = "BASF logo" src= {Basf} className = "companies-logo"/>
                </div>
                <div className="container">
                    <img alt = "The Humbolt Company logo" src= {Humbolt} className = "companies-logo"/>
                </div>
                <div className="container">
                    <img alt = "Proterra logo" src= {Proterra} className = "companies-logo"/>
                </div>
                <div className="container">
                    <img alt = "Stormcloud logo" src= {Stormcloud} className = "companies-logo w-[50%] h-[50%]"/>
                </div>
                <div className="container">
                    <img alt = "LaCroix logo" src= {LaCroix} className = "companies-logo"/>
                </div>
            </div>
        </div>
    );
};

export default Companies;