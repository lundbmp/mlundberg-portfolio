import React from "react";

function Projects() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5">
          <h4>My/Tech/Blog</h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://boiling-castle-88819.herokuapp.com/"
          >
            <img
              src={require("../../assets/my-tech-blog.png")}
              alt="My Tech Blog"
              className="img-thumbnail h-75"
            />
          </a>
        </div>
        <div className="col-5">
          <h4>boozy-books</h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nickschenck.github.io/Book-Nook/"
          >
            <img
              src={require("../../assets/boozy-books.png")}
              alt="Boozy Books"
              className="img-thumbnail h-75"
            />
          </a>
        </div>
        <div className="col-5">
          <h4>Suds on Sale</h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://group-project-dos.herokuapp.com/"
          >
            <img
              src={require("../../assets/sudsonsale.png")}
              alt="Suds on Sale"
              className="img-thumbnail h-75"
            />
          </a>
        </div>
        <div className="col-5">
          <h4>Social Network Api</h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lundbmp/social-network-api"
          >
            <img src={require("../../assets/pexels-photo-546819.png")} alt="Social Network Api" className="img-thumbnail h-75"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
