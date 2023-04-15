import { useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Page1 from "./Components/Page1";
import Page2 from "./Components/page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import Page7 from "./Components/Page7";
import Page8 from "./Components/Page8";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="page5" element={<Page5 />} />
          <Route path="page6" element={<Page6 />} />
          <Route path="page7" element={<Page7 />} />
          <Route path="page8" element={<Page8 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
