import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Transcript from "./components/Transcript";
import Report from "./components/Report";
import Buttons from "./utils/Buttons";

const App = () => {
  return (
    <>
      <Router>
        <div className="main min-h-screen w-full">
          <Navbar />
          <Buttons />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transcript" element={<Transcript />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
