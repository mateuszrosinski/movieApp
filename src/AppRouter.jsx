// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoveView from "./EmotionsView/LoveView";
import StartPage from "./StartPage"; // Dodaj import StartPage

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/LoveView" element={<LoveView />} />
        <Route path="/" element={<StartPage />} />
        {/* Dodaj kolejne Route dla innych emocji, jeśli są dostępne */}
        {/* <Route path="/emotion1" element={<Emotion1Page />} /> */}
        {/* <Route path="/emotion2" element={<Emotion2Page />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
