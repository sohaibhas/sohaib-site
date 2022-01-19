import react from "react";
import { BrowserRouter as Router ,Route,Routes,Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import TopBar from "./components/TopBar";

function App() {
  return (
    <Router>
    <div>
      <TopBar />
      <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
