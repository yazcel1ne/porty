import "./App.css";
import "./styles/tailwind.css";
import "/src/styles/transitions.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./LandingPage/MainLandingPage.jsx";
import ComingSoon from "./LandingPage/Pages/ComingSoon.jsx"
import NavBar from "./LandingPage/NavBar.jsx";

function App() {
  return (
    <>


      <Router>
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
