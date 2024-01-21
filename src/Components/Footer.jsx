import '../../src/App.css';
import React from 'react';
import './Styles/Footer.css'
export default function Footer() {

  const handleSocialsClick = (link) => {
    setTimeout(() => {
      window.open(link);
    }, 1000);
  };

  return (
  
    <>
    <footer>
        <div className="footerQuote">Explore | Evolve | Ascend</div>

  
          <div className="socialsContainer">
              <div className="socialsCompleteBtn" onClick={() => handleSocialsClick("https://www.linkedin.com/in/madhvendra-naruka-52b52621a/")}>
  
                  <div className="socialsBigDiv">
                      <div className="socialLogo" id="linkedinLogo"></div>
                      <div className="socialName" id="linkedinName">LinkedIn</div>
                      <div className="socialId" id="linkedinId">/madhavendra</div>
                  </div>
                  <div className="chibiDog"></div>
              </div>
  
              <div className="socialsCompleteBtn" onClick={() => handleSocialsClick("https://github.com/Madhavendra-007")}>

  
          <div className="socialsBigDiv">
            <div className="socialLogo" id="githubLogo"></div>
            <div className="socialName" id="githubName">Github</div>
            <div className="socialId" id="githubId">/madhavendra007</div>
          </div>
          <div className="chibiDog"></div>
              </div>

  
              <div className="socialsCompleteBtn" onClick={() => handleSocialsClick("mailto:madhvendrasinghnaruka@gmail.com")}>

              <div className="socialsBigDiv">
                  <div className="socialLogo" id="mailLogo"></div>
                  <div className="socialName" id="mailName">G-Mail</div>
                  <div className="socialId" id="mailId">@madhavendrasinghnaruka</div>
              </div>
              <div className="chibiDog"></div>
              </div>
  
  
              <div className="socialsCompleteBtn" onClick={() => handleSocialsClick("https://wa.me/9829620291")}>

              <div className="socialsBigDiv">
                  <div className="socialLogo" id="whatsappLogo"></div>
                  <div className="socialName" id="whatsappName">Whatsapp</div>
                  <div className="socialId" id="whatsappId">9829620291</div>
              </div>
              <div className="chibiDog"></div>
              </div>


              <div className="socialsCompleteBtn" onClick={() => handleSocialsClick("tel:9829620291")}>

          <div className="socialsBigDiv">
            <div className="socialLogo" id="callLogo"></div>
            <div className="socialName" id="callName">Mobile</div>
            <div className="socialId" id="callId">9829620291</div>
          </div>
          <div className="chibiDog"></div>
              </div>
        </div>

  
        <div className="copyright">
          Designed & built by Madhavendra &#169; twentytwentythree
        </div>
      </footer>

    </>

  )
}
