import GreenIcon from "../SVGs/greenicon.svg";

const Footer = () => {
    return (
        <div className="footer-box">
          <img src={GreenIcon} alt="envira icon"/>
        <p className="copyright"> © 2014 - 2022 ENVIRA Recycle | All Rights Reserved</p>
      </div>
    );
};
export default Footer;