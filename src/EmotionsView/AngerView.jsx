// EmotionsView/AngerView.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const AngerView = () => {
  return (
    <Paper
      style={{
        padding: "20px",
        backgroundColor: "#f44336",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Złość</Typography>
      <Typography variant="body1">
        Złość to silna emocja, często wywołana uczuciem niezadowolenia lub
        frustracji. Oglądanie filmów, które poruszają temat złości, może
        prowokować intensywne reakcje.
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Kolor związany ze złością: #f44336
      </Typography>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Lista filmów wywołujących złość:
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

export default AngerView;
