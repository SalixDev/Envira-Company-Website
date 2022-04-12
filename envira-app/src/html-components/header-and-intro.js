const HeaderIntro = () => {
    return (
        <div>
        <link rel="stylesheet" href="./styles.css" />
        <meta charSet="UTF-8" /> 
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ENVIRA</title>

            <div className="header">
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
            </div>

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
                <div className="bac-img1-woman"></div>
              </div>
            </div>
          </div>
        );
    };

    export default HeaderIntro;