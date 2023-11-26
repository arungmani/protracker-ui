import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import "./App.css";

import AddProject from "./components/AddProject";
import Tutorial from "./components/Tutorial";
import ProjectList from "./components/ProjectList";
import ProTrackerMenu from "./components/ProTrackerMenu"; // Import your ProTrackerMenu component

const App: React.FC = () => {
  return (
    <div>
      <ProTrackerMenu /> {/* Include the menu at the top of your app */}
      <div className="container mt-3">
        <Routes>
          <Route path="/projects/all" element={<ProjectList />} />
          <Route path="/projects/add" element={<AddProject />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;