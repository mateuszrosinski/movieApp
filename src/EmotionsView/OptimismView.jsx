// EmotionsView/OptimismView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const OptimismView = () => {
  return (
    <Paper
      style={{
        ...ViewStyles.paper,
        backgroundColor: "#4caf50",
      }}
    >
      <Typography variant="h4" style={ViewStyles.heading}>
        Optymizm
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Optymizm to pozytywne podejście do życia, wiara w sukces i zdolność do
        widzenia jasnej strony sytuacji. To emocja, która pomaga radzić sobie z
        wyzwaniami z nadzieją na lepsze jutro.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany z optymizmem: #4caf50
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista filmów wywołujących optymizm:
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

export default OptimismView;
