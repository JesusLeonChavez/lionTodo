import TopBar from './components/topBar/TopBar';

import "./app.css";
import SideBar from './components/sideBar/SideBar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
