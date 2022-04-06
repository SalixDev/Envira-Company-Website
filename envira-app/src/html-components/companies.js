import CocaCola from "../logos/CocaCola.png";
import PapaJohns from "../logos/PapaJohns.png";
import Stormcloud from "../logos/Stormcloud.png";
import Basf from "../logos/BASF.png";
import Starbucks from "../logos/Starbucks.png";

const Companies = () => {
    return (
        <div className = "flex flex-col justify-center content-center bg-[#f5f5f5]">
            <h1 className = "text-[#1fda76] font-wichitaBold flex justify-center content-center font-bold text-2xl mb-[-1%]">We work with</h1>
            <div className = "flex flex-col justify-center content-center gap-8 mx-20 my-8 md:flex-row ">
                <div className=" flex justify-center content-center">
                    <img alt = "BASF logo" src= {Basf} className = "companies-logo"/>
                </div>
                <div className=" flex justify-center content-center">
                    <img alt = "Starbucks logo" src= {Starbucks} className = "companies-logo md:w-20 md:h-auto w-[180px] h-auto md:mt-[-10px]"/>
                </div>
                <div className=" flex justify-center content-center">
                    <img alt = "Coca-Cola logo" src= {CocaCola} className = "companies-logo"/>
                </div>
                <div className=" flex justify-center content-center">
                    <img alt = "Stormcloud logo" src= {Stormcloud} className = "companies-logo md:w-20 md:h-auto w-[180px] h-auto md:mt-[-10px]"/>
                </div>
                <div className=" flex justify-center content-center">
                    <img alt = "Papa Johns logo" src= {PapaJohns} className = "companies-logo"/>
                </div>
            </div>
        </div>
    );
};

export default Companies;