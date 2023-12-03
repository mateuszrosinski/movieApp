// EmotionsView/SurpriseView.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const SurpriseView = () => {
  return (
    <Paper
      style={{
        padding: "20px",
        backgroundColor: "#ff9800",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Zaskoczenie</Typography>
      <Typography variant="body1">
        Zaskoczenie to nagła i nieoczekiwana reakcja na coś, co jest nieznane
        lub niespodziewane. To emocja, która może wywołać mieszane uczucia
        zdziwienia i ciekawości.
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Kolor związany ze zaskoczeniem: #ff9800
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Lista filmów wywołujących zaskoczenie:
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

export default SurpriseView;
