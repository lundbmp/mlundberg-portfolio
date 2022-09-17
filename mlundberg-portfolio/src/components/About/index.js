import React from "react";

function About() {
  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-left">
        <div className="col-8">
          <h2>About Me</h2>
          <p>Thanks for finding my page.</p>
          <p>
            My name is Michael, I'm a graduate of North Hennepin Community
            College with an assiociate in Computer Science. At North Hennepin I
            learned about: Object Oriented Programming, Data Structures,
            Algorithms, Computer Architecture(ARM specific), and Databases.
            While at North Hennepin I became proficient in Java, C#, Python,
            C++, and SQL.
          </p>
          <p>
            I'm currently going the University of Minnesota Coding Bootcamp.
            We're leanining the MongoDB, Express.js, React, Node.js stack(MERN).
            Throughout this bootcamp, I've learned about the importance of
            version control, setting up API routes, and working in a group. The
            projects Boozy Books and Suds on Sale were both completed as group
            projects.
          </p> 
          <p>
            I currently work at ECMC as an Operations Analyst. At ECMC I work
            with developers to report issues and enhancments, gather and compile
            information for research, automation of simple tasks, and making
            sure our systems adhere to federal guidelines. While at ECMC I've
            learned how to work in an Agile enviroment, managing and creating
            procedural documentation, as well as making complex SQL queries.
          </p>
          <p>
            Work life balance is important and how I manage that is by having a
            variety of hobbies. Outside of work I like to: bake, archery, bike,
            run, play video games, and going to concerts.
          </p>
        </div>
        <div className="col-4 mt-4">
          <img src={require("../../assets/selfie.jpeg")} alt="My picture" className="img-thumbnail h-50"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
