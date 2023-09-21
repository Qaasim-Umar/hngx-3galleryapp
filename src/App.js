import "./App.css";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./pages/Home";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="Signup" element={<Signup />} />
          <Route exact path="Home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
