import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstPage from "../src/screens/FirstPage";
import Home from "../src/screens/homePage";
import Login from "../src/screens/Login";

import AnalyzeImage from "../src/analyzingPages/AnalyzingImage";
import AnalyzingText from '../src/analyzingPages/AnalyzingText';
function App() {
  return (
    <Router>
    <>
      
    </>

    <Routes>
      <Route exact path="/" element={<FirstPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AnalyzeText" element={<AnalyzingText />} />
      <Route path="/Image" element={<AnalyzeImage />} />
    </Routes>
  </Router>
  );
}

export default App;
