import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import ProjectList from "./components/ProjectList";

const App: React.FC = () => {
  return (
    <div>
      <div className="container mt-3">
        <Routes>
          <Route path="/api/project/allProjects" element={<ProjectList/>} />
          <Route path="/projects" element={<ProjectList/>} />
          <Route path="/add" element={<AddTutorial/>} />
          <Route path="/tutorials/:id" element={<Tutorial/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
