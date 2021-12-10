import React from "react";
import Flip from 'react-reveal/Flip';
import Jump from 'react-reveal/Jump';
import Selfie from '../../samerSelfie1.png';

function Home() {
  return (
    <div className="container mt-5 mb-5 rounded bg-light">
      <div className="row">
        <div className="col">
            <Jump>
            <h1 className="pt-3 pl-3">WHO AM I?</h1>
            </Jump>
            <hr />
          <div className="newClass">
            <Flip left>
            <img id="selfie"  src={Selfie} alt="Samer selfie" />
            </Flip>
            <div id= "textBox" className="mt-3 px-3">
                <h4>As a professional,</h4>
                <p>Full stack web developer with good knowledge of <strong>HTML, CSS, JavaScript, jQuery, React, Node.js, Express, MySQL, MongoDB, MVC, MERN</strong>. I try to learn a new thing everyday no matter how simple or complex it is.</p>
                <p>Currently, I'm focused on React and JavaScript and working on a project that has the potential to become an LLC or a Non-profit business. At the same time, I'm actively looking for a job, which is a priority for me now.</p>
                    
                <p>My path started back in Syria when I received my BSc in Computer Science in 2009. The first step in my career was in the United Arab Emirates as junior software developer, and quickly jumped to another start-up company because they offered a better training package.</p>
                <p>Working with a start-up was very exciting and challenging. I had to learn so many different fields in a very short period of time. From installing security cameras, to networks cabling and installation, to technical support, and some coding and software testing.</p>
                <p>In 2011, I received an offer to work as a social media producer in Russia Today tv channel. I took the offer and got lost in digital journalism for the next 8 years, half of that in Alhurra tv channel in Virginia, U.S.</p>
                <p>Working in major international media outlets was an amazing journey. It's a very rich environment to gain so many different skills, both soft and technical skills. From multimedia editing to writing articles/news, to social media analytics, to writing reports and meeting daily strict deadlines. Working under pressure was a daily life situation.</p>
                <p>So, I am proud to say that I survived 8 years of journalism and not only survived, but got promoted twice to a mid-level management roles.</p>
                <br />
                <h4>As a life-form called Human-being, </h4>
                <p>I was born and raised in Syria to an Arab father and a Russian mother. Just that fact alone, caused me a lot of confusion growing up. I wasn't able to label myself as anything. I was not an Arab, not a Russian, not a muslim, not a christian, not any of that and all of that at the same time.</p>
                <p>It took me 35 years, a lot of traveling and making friends from different cultures, and 8 seasons of Game of Thrones to understand that it was a blessing not a curse to be No-one (No-one became my nickname in video games)</p>
                <p>Long story short, I'm No-One who likes hiking, mushrooms hunting, nature, cooking, clay modeling, gaming. But coding is all what I do recently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;