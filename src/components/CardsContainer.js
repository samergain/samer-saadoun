import React from "react";
import Card from "./Card";
import Projects from "../projects.json";
import LightSpeed from 'react-reveal/LightSpeed';
import Jump from 'react-reveal/Jump';

function CardsContainer() {
  return (
    <>
       <div className="container mt-5 rounded bg-light">
        <div className="row">
        <div className="col">
          <Jump>
            <h1 className="pt-3 pl-3">WHAT CAN I DO SO FAR?</h1>
            </Jump>
            <hr />
            <div className="row row-cols-1 row-cols-md-2">
                {
                  Projects.map(project => (
                    <LightSpeed left>
                    <Card 
                    src={project.src}
                    alt ={project.alt}
                    title= {project.title}
                    repoLink= {project.repoLink}
                    description= {project.description}
                    />
                    </LightSpeed>
                  ))
                }
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default CardsContainer;