// EmotionsView/FearView.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const FearView = () => {
  return (
    <Paper
      style={{
        padding: "20px",
        backgroundColor: "#3f51b5",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Strach</Typography>
      <Typography variant="body1">
        Strach to silna, emocjonalna reakcja na zagrożenie. Oglądanie strasznych
        filmów może pobudzić układ nerwowy, powodując uczucie niepokoju i lęku.
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Kolor związany ze strachem: #3f51b5
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Lista strasznych filmów:
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

export default FearView;
