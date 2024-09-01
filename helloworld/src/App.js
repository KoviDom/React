import "bootstrap/dist/css/bootstrap.min.css"; 
import { HelloWorld } from "./HelloWorld";
import { Counter } from "./Counter";
import { CalculatorForm } from "./calculator/CalculatorForm";
import { People } from "./swapi/People";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./swapi/Home";
import { Person } from "./swapi/Person";
import { RickMorty } from "./RickMorty";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>SWAPI</Link>
            <div className="navbar-nav me-auto">
              <Link className="nav-link" to={"/people"}>People</Link>
            </div>
            <div className="navbar-nav me-auto">
              <Link className="nav-link" to={"/rickmorty"}>RickMorty</Link>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<Person />} />
        <Route path="/rickmorty" element={<RickMorty />} />
      </Routes>


      <div className="container text-center">
        <HelloWorld 
        name="Hello"
        text="World!" 
        />
        <HelloWorld 
        text="světe!"
        name="Ahoj" 
        />
        <br />
        <br />
        <Counter start={10} />
        <br />
        <br />
        <br />
        <CalculatorForm title={"Kalkulačka React"} /> 
        <br />
        <br />
        <br />
        <People />
      </div>
    </Router>  
  );
}

export default App;
