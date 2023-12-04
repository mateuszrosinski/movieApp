// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./Registration/RegistrationForm";
import LoginForm from "./Registration/LoginForm";
import AngerView from "./EmotionsView/AngerView";
import CalmView from "./EmotionsView/CalmView";
import DisappointmentView from "./EmotionsView/DisappointmentView";
import FearView from "./EmotionsView/FearView";
import JoyView from "./EmotionsView/JoyView";
import LoveView from "./EmotionsView/LoveView";
import OptimismView from "./EmotionsView/OptimismView";
import RecklessView from "./EmotionsView/RecklessView";
import SadnessView from "./EmotionsView/SadnessView";
import SurpriseView from "./EmotionsView/SurpriseView";
import StartPage from "./StartPage"; // Dodaj import StartPage

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/LoginForm" element={<LoginForm />} />

        <Route path="/AngerView" element={<AngerView />} />
        <Route path="/CalmView" element={<CalmView />} />
        <Route path="/DisappointmentView" element={<DisappointmentView />} />
        <Route path="/FearView" element={<FearView />} />
        <Route path="/JoyView" element={<JoyView />} />
        <Route path="/LoveView" element={<LoveView />} />
        <Route path="/OptimismView" element={<OptimismView />} />
        <Route path="/RecklessView" element={<RecklessView />} />
        <Route path="/SadnessView" element={<SadnessView />} />
        <Route path="/SurpriseView" element={<SurpriseView />} />
        <Route path="/" element={<StartPage />} />
        {/* Dodaj kolejne Route dla innych emocji, jeśli są dostępne */}
        {/* <Route path="/emotion1" element={<Emotion1Page />} /> */}
        {/* <Route path="/emotion2" element={<Emotion2Page />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
