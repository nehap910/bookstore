import React from "react";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          {/* <Route  path="/contact" element={<Contact />}/> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
