import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Articles = () => {
  useEffect (() => {
    Aos.init({ duration: 800 });
  }, []);

    return (
        <div className="bg-whiteSmoke h-auto flex justify-center gap-10 
        md:flex-row flex-col md:items-start items-center py-6">
                {/* <img src= {Plant} alt="plant theme" className="p-0 w-[18%] h-auto absolute top-[300vh] left-0"/> */}
            <div className="md:ml-5 lg:overflow-x-visible overflow-x-hidden">
                <div className="w-64" data-aos="fade-right" data-aos-once>
                    <div className="first-img ArticleImg">
                        <div className="ArticleImgSlant"></div>
                    </div>
                    <p className="ArticleTag">AUTOMOBILE INDUSTRY</p>
                    <h1 className="ArticleHeadline">Envira and Proterra Partnership Divert Over 99 Percent of Factory Waste from Ending Up in Landfills</h1>
                    <p className="ArticleAuthor">By Oscar E. Salcedo</p>
                    <button className="BlueButton">Read More</button>
                </div>
            </div>
            <div className="md:mr-5 flex items-end lg:overflow-x-visible overflow-x-hidden">
                <div className="md:mt-24 w-64" data-aos="fade-left" data-aos-once>
                    <div className="second-img ArticleImg ">
                        <div className="ArticleImgSlant"></div>
                    </div>       
                    <p className="ArticleTag">BEVERAGE</p>
                    <h1 className="ArticleHeadline">Recycling Glass and Metal Waste in the Beverage Industry</h1>
                    <p className="ArticleAuthor">By Hannah Sampson</p>
                    <button className="BlueButton">Read More</button>
                </div>
            </div>
        </div>
        );
    };

    export default Articles;