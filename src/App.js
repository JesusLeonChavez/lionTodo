import TopBar from './components/topBar/TopBar';
import SideBar from './components/sideBar/SideBar';

import Home from './pages/home/Home';
import ToDo from './pages/toDo/ToDo';

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/todos" element={<ToDo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
