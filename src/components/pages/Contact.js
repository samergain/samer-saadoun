import React from "react";
import Flip from 'react-reveal/Flip';
import Jump from 'react-reveal/Jump';
import './Contact.css';

function Home() {
  return (
    <div className="container mt-5 rounded bg-light">
        <div className="row">
            <div className="col contact">
                <div class="contact-card">
                    <i class="fa fa-github-square fa-2x"></i><a href="https://github.com/samergain" target="_blank" rel="noreferrer">https://github.com/samergain</a>
                </div>
                <div class="contact-card">
                    <i class="fa fa-linkedin-square fa-2x"></i><a href="https://www.linkedin.com/in/ssamer/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/ssamer/</a>
                </div>
                <div class="contact-card">
                    <i class="fa fa-facebook-square fa-2x"></i><a href="https://www.facebook.com/sssamer" target="_blank" rel="noreferrer">https://www.facebook.com/sssamer</a>
                </div>
                <div class="contact-card">
                    <i class="fa fa-envelope-square fa-2x"></i><a href="mailto:samersadon@gmail.com" target="_blank" rel="noreferrer">samersadon@gmail.com</a>
                </div>
                <div class="contact-card">
                    <i class="fa fa-phone-square fa-2x"></i><a href="" target="_blank" rel="noreferrer">+1-202-361-5963</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;