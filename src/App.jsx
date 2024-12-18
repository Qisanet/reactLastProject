import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movielist from "./Movielist.jsx";
import MovieDetail from "./MovieDetail.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movielist />} /> 
        <Route path="/movie/:id" element={<MovieDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;