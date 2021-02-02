import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Episodios from "./components/Episodios";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Personajes from "./components/Personajes/Personajes";
import Episodios from './components/Episodios/Episodios' ; 

export default App;

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <div className="nav tabs justify-content-end shadow p-3 mb-5 bg-white rounded ">
          <Link to="/inicio" className="btn btn-green fs-4">
            Inicio
          </Link>
          <Link to="/episodios" className="btn btn-green fs-4">
            Episodios
          </Link>
          <Link to="/personajes" className="btn btn-green fs-4">
            Personajes
          </Link>
        </div>
        <hr />
        <Switch>
          <Route path="/inicio">
            <Inicio />
          </Route>
          <Route path="/episodios">
            <Episodios />
          </Route>
          <Route path="/personajes">
            <Personajes />
          </Route>
        </Switch>
      </div>

      <div>
        <Footer />
      </div>
    </Router>
  );
}
