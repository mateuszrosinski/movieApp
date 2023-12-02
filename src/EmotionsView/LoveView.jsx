// EmotionsView/LoveView.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const LoveView = () => {
  return (
    <Paper
      style={{ padding: "20px", backgroundColor: "#ff4081", color: "#fff" }}
    >
      <Typography variant="h4" align="center">
        Miłość
      </Typography>
      <Typography variant="body1">
        Miłość to jedna z najpiękniejszych i najważniejszych emocji, której
        trudno jest znaleźć dokładne określenie. To uczucie łączy ludzi w
        głęboki sposób, pełen ciepła, zaufania i zrozumienia.
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Kolor związany z miłością: #ff4081
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Lista filmów o miłości:
      </Typography>
      <ul>
        <li>Tytuł filmu 1: Opis filmu 1. Gra w nim Aktor 1.</li>
        <li>Tytuł filmu 2: Opis filmu 2. Gra w nim Aktor 2.</li>
        <li>Tytuł filmu 3: Opis filmu 3. Gra w nim Aktor 3.</li>
        <li>Tytuł filmu 4: Opis filmu 4. Gra w nim Aktor 4.</li>
        <li>Tytuł filmu 5: Opis filmu 5. Gra w nim Aktor 5.</li>
      </ul>
    </Paper>
  );
};

console.log("Mam katza i psa");
export default LoveView;
