import React from "react";

function Header({ setAboutSelected }) {
  return (
    <header className="container-fluid">
      <div className="row">
        <div>
          <h2 className="col">
            <a data-testid="link" href="/mlundberg-portfolio/">
              Michael Lundberg
            </a>
          </h2>
        </div>
        <nav className="row justify-content-left">
          <a
            href="#about"
            className="col-1"
            onClick={() => setAboutSelected(true)}
          >
            About me
          </a>
          <a
            href="#projects"
            className="col-1"
            onClick={() => setAboutSelected(false)}
          >
            {" "}
            Projects
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/michael-lundberg-b64964151/"
            className="col-1"
          >
            {" "}
            Linkedin
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lundbmp"
            className="col-1"
          >
            {" "}
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:m.lundberg008@gmail.com"
            className="col-1"
          >
            {" "}
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
