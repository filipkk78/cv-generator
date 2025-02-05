import "./styles/App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GenerateCv from "./components/GenerateCv";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    name: "John Smith",
    email: "jsmith@gmail.com",
    phone: "123456789",
    school: "Boston University",
    title: "Bachelor",
    studyDate: "05-02-2022",
    company: "Google",
    position: "Junior Fullstack Developer",
    responsibilities: "Something something bla bla",
    workedFrom: "07-14-2022",
    workedUntil: "02-05-2025",
  });

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  return (
    <div className="wrapper">
      <header>
        <h1>CV Generator App</h1>
      </header>
      <aside>
        <General handler={handleChange}></General>
        <Education handler={handleChange}></Education>
        <Experience handler={handleChange}></Experience>
      </aside>
      <main>
        <GenerateCv {...info}></GenerateCv>
      </main>
      <footer>
        <h2>filipkk78</h2>
      </footer>
    </div>
  );
}

export default App;
