import "./styles/App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GenerateCv from "./components/Cv";

function App() {
  return (
    <>
      <div className="wrapper">
        <header>
          <h1>CV Generator App</h1>
        </header>
        <aside>
          <General></General>
          <Education></Education>
          <Experience></Experience>
        </aside>
        <main>
          <GenerateCv
            name="John Smith"
            email="jsmith@gmail.com"
            phone="123456789"
            school="Boston University"
            title="Bachelor"
            studyDate="05-02-2022"
            company="Google"
            position="Junior Fullstack Developer"
            responsibilities="Something something bla bla"
            workedFrom="07-14-2022"
            workedUntil="02-05-2025"
          ></GenerateCv>
        </main>
        <footer>
          <h2>filipkk78</h2>
        </footer>
      </div>
    </>
  );
}

export default App;
