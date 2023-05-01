import { Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Player from "./screens/Player";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={HomeScreen} />
          <Route path="/player" Component={Player} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
