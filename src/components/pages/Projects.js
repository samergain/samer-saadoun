import React from "react";

function Projects() {
  return (
    <div className="container mt-5 rounded bg-light">
        <div className="row">
        <div className="col">
            <h1 className="pt-3 pl-3">WHAT CAN I DO SO FAR?</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col mb-4">
                <div className="card">
                    <img src="https://samergain.github.io/samers-portfolio/images/burgerify.png" className="card-img-top" alt="screenshot of burgerify project" />
                    <div className="card-body">
                      <h5 className="card-title">Burgerify</h5>
                      <a href="https://github.com/samergain/Burgerify" target="_blank" rel="noreferrer">Burgerify</a>
                      <p className="card-text">This project will burgerify your burgers implementing MVC design using Express,Node,Handlebars,MySQL and topped with ORM sauce. This project is <a href="https://powerful-ridge-10363.herokuapp.com/" targer="_blank">deployed on Heroku</a> using JAWSDB add-on.</p>
                    </div>
                </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img src="https://samergain.github.io/samers-portfolio/images/Santas.png" className="card-img-top" alt="screenshot of santas project" /> 
                      <div className="card-body">
                      <h5 className="card-title">Santa's Bag</h5>
                      <a href="https://github.com/samergain/Santas_Bag" target="_blank" rel="noreferrer">Manage your budget and gifts</a>
                      <p className="card-text">This app built to help you manage the gifts for your loved ones during the holidays season. Run the app on <a href="https://santas-bag.herokuapp.com/" targer="_blank">heroku</a></p>
                      </div>
                  </div>
                  </div>
                <div className="col mb-4">
                <div className="card">
                    <img src="https://github.com/samergain/work-day-scheduler/raw/master/workday.png" className="card-img-top" alt="screenshot of work-day-scheduler project" />
                    <div className="card-body">
                    <h5 className="card-title">Word Day Scheduler</h5>
                    <a href="https://github.com/samergain/work-day-scheduler" target="_blank" rel="noreferrer">9-5 work-day tasks</a>
                    <p className="card-text">Simple interface for scheduling your workday. Enter your task in a time-slot and click save button to have it saved in your browser.</p>
                    </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card">
                    <img src="https://github.com/samergain/weather-app/raw/main/largeLayout.png" className="card-img-top" alt="screenshot of a weather app" />
                    <div className="card-body">
                    <h5 className="card-title">Weather Application</h5>
                    <a href="https://github.com/samergain/weather-app" target="_blank" rel="noreferrer">Search for a city to check the weather</a>
                    <p className="card-text">Search for a city in the U.S. get current weather and 5 days forecast for that city. All searched cities are stored in localStorage and the last one entered witll be on screen.</p>
                    </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card">
                    <img src="https://samergain.github.io/samers-portfolio/images/whales.png" className="card-img-top" alt="Whales Tracker project screenshot" />
                    <div className="card-body">
                    <h5 className="card-title">Whales Tracker</h5>
                    <a href="https://github.com/samergain/Whale_Tracker" target="_blank" rel="noreferrer">Whales Tracker</a>
                    <p className="card-text">Intergrating two APIs to locate whales sightings around the world. Geo search and species search available.</p>
                    </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card">
                    <img src="https://samergain.github.io/samers-portfolio/images/robofriends.png" className="card-img-top" alt="screenshot of RoboFriends project" />
                    <div className="card-body">
                    <h5 className="card-title">Welcome React!</h5>
                    <a href="https://github.com/samergain/robofriends" target="_blank" rel="noreferrer">RoboFriends</a>
                    <p className="card-text">Find your robo-friend with my first project using React.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Projects;