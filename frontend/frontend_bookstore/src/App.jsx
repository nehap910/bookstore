import React from "react";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";


import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route  path="/signup" element={<Signup />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
