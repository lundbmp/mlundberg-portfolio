import React from "react";
import projects from "../../assets/project-data";

function Projects() {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        {projects.map((project) => (
          <div className="col-5">
            <h4>
              {project.name}{" "}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github-logo"
                  src={require("../../assets/github_logo.png")}
                  alt="github logo"
                ></img>
              </a>
            </h4>
            <a target="_blank" rel="noopener noreferrer" href={project.deploy}>
              <img
                src={require(`../../assets/${project.photo}`)}
                alt={project.alt}
                className="img-thumbnail h-75"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
