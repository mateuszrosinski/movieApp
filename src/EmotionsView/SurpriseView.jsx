// EmotionsView/SurpriseView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const SurpriseView = () => {
  return (
    <Paper
      style={{
        ...ViewStyles.paper,
        backgroundColor: "#ff9800",
      }}
    >
      <Typography variant="h4" style={ViewStyles.heading}>
        Zaskoczenie
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Zaskoczenie to nagła i nieoczekiwana reakcja na coś, co jest nieznane
        lub niespodziewane. To emocja, która może wywołać mieszane uczucia
        zdziwienia i ciekawości.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany ze zaskoczeniem: #ff9800
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista filmów wywołujących zaskoczenie:
      </Typography>
      <ul style={ViewStyles.filmList}>
        <li style={ViewStyles.filmListItem}>
          Tytuł filmu 1: Opis filmu 1. Gra w nim Aktor 1.
        </li>
        <li style={ViewStyles.filmListItem}>
          Tytuł filmu 2: Opis filmu 2. Gra w nim Aktor 2.
        </li>
        {/* ... inne filmy ... */}
      </ul>
    </Paper>
  );
};

export default SurpriseView;
