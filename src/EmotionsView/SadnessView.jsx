// EmotionsView/SadnessView.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const SadnessView = () => {
  return (
    <Paper
      style={{
        padding: "20px",
        backgroundColor: "#607d8b",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Smutek</Typography>
      <Typography variant="body1">
        Smutek to uczucie żalu i przygnębienia, które może być wywołane przez
        różne sytuacje życiowe. To głęboka emocja, która często towarzyszy
        utracie lub rozczarowaniu.
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Kolor związany ze smutkiem: #607d8b
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Lista filmów wywołujących smutek:
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

export default SadnessView;
