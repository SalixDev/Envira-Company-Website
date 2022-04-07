
const Articles = () => {
    return (
        <div className="bg-[#f5f5f5] h-[700px] flex justify-center gap-10">
            <div className="ml-5">
                <div className=" mt-10 w-64">
                    <div className="Tesla-img ArticleImg">
                        <div className="ArticleImgSlant"></div>
                    </div>
                    <p className="ArticleTag">AUTOMOBILE INDUSTRY</p>
                    <h1 className="ArticleHeadline">Envira and Tesla Partnership Divert Over 99 Percent of Factory Waste from Ending Up in Landfills</h1>
                    <p className="ArticleAuthor">By Oscar E. Salcedo</p>
                    <button className="BlueButton">Read More</button>
                </div>
            </div>
            <div className="mr-5 flex items-end">    
                <div className="mb-10 w-64">
                    <div className="CocaCola-img ArticleImg ">
                        <div className="ArticleImgSlant"></div>
                    </div>       
                    <p className="ArticleTag">COCA-COLA</p>
                    <h1 className="ArticleHeadline">Recycling Glass and Metal Waste in the Beverage Industry</h1>
                    <p className="ArticleAuthor">By Hannah Sampson</p>
                    <button className="BlueButton">Read More</button>
                </div>
            </div>
        </div>
        );
    };

    export default Articles;