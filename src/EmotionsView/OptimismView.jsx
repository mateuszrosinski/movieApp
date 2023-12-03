// EmotionsView/OptimismView.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const OptimismView = () => {
  return (
    <Paper
      style={{
        padding: "20px",
        backgroundColor: "#4caf50",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Optymizm</Typography>
      <Typography variant="body1">
        Optymizm to pozytywne podejście do życia, wiara w sukces i zdolność do
        widzenia jasnej strony sytuacji. To emocja, która pomaga radzić sobie z
        wyzwaniami z nadzieją na lepsze jutro.
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Kolor związany z optymizmem: #4caf50
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Lista filmów wywołujących optymizm:
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

export default OptimismView;
