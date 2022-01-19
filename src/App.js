import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "./components/TopBar";

function App() {
  return (
    <Router>
    <div>
      <TopBar />
    </div>
    </Router>
  );
}

export default App;
