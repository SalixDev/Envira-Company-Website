import BGWoman from "../SVGs/credit-card.svg"
const Intro = () => {
    return (
        <div className="hero">
        <div className="hero-inner"> 
          <div className="intro-text-container">
            <h1 className="slogan">Feel the Envira</h1>
            <h1 className="sub-slogan">Advantage.</h1>
            <p className="sub-text">
            A family owned company working with businesses to achieve waste reduction and increased recycling while saving you money.
            </p>
            <button className="button">About Us</button>
          </div>
          <div className="bg-img1-woman-container">
            <img className="bg-img1-woman" src={BGWoman}/>
          </div>
        </div>
      </div>
        );
    };

    export default Intro;