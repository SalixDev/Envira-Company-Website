
const HeaderIntro = () => {
    return (
        <div>
        <link rel="stylesheet" href="./styles.css" />
        <meta charSet="UTF-8" /> 
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <div className="bac-img1-woman">{/* first background img */}
          <div className="bac-img2-lines">
              <div className="header-box"> {/* website header */}
                <div className="logo-container">
                  <h3 className="logo">ENVIRA</h3>
                  <h3 className="sub-logo">♻ RECYCLING</h3>
                </div>
                <div className="header-links">
                  <p className="header-link1">Services</p>
                  <p className="header-link2">Operations</p>
                  <p className="header-link3">About</p>
                </div>
                <button className="contact-us">Contact Us</button>
              </div>
              <div className="intro"> 
                <div className="intro-container">
                  <h1 className="slogan">Feel the Envira</h1>
                  <h1 className="sub-slogan">Advantage.</h1>
                  <p className="sub-text">
                    A family owned company working with businesses to achieve waste reduction and increased recycling while saving you money.
                  </p>
                  <button className="button">About Us</button>
                </div>
              </div>
          </div>
        </div>
        </div>
        );
    };

    export default HeaderIntro;