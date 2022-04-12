import GreenIcon from "../SVGs/greenicon.svg";

const Footer = () => {
    return (
        <div className="footer-box">
          <img src={GreenIcon} alt="envira icon"/>
        <p className="copyright"> Copyright © Kiwimoto 2022</p>
      </div>
    );
};
export default Footer;