// EmotionsView/JoyView.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const JoyView = () => {
  return (
    <Paper
      style={{
        padding: "20px",
        backgroundColor: "#ffeb3b",
        color: "#000",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" align="center">
        Radość
      </Typography>
      <Typography variant="body1">
        Radość to jedna z najpozytywniejszych emocji, charakteryzująca się
        uczuciem szczęścia, entuzjazmu i pozytywnego podejścia do życia.
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Kolor związany z radością: #ffeb3b
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Lista filmów wywołujących radość:
      </Typography>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>Tytuł filmu 1: Opis filmu 1. Gra w nim Aktor 1.</li>
        <li>Tytuł filmu 2: Opis filmu 2. Gra w nim Aktor 2.</li>
        <li>Tytuł filmu 3: Opis filmu 3. Gra w nim Aktor 3.</li>
        <li>Tytuł filmu 4: Opis filmu 4. Gra w nim Aktor 4.</li>
        <li>Tytuł filmu 5: Opis filmu 5. Gra w nim Aktor 5.</li>
      </ul>
    </Paper>
  );
};

export default JoyView;
