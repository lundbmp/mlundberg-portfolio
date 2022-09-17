import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);

  return (
    <div>
      <Header
        setAboutSelected={setAboutSelected}
      ></Header>
      <main>{aboutSelected ? <About></About> : <Projects></Projects>}</main>
    </div>
  );
}

export default App;
