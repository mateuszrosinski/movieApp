// EmotionsView/SadnessView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const SadnessView = () => {
  return (
    <Paper
      style={{
        ...ViewStyles.paper,
        backgroundColor: "#607d8b",
      }}
    >
      <Typography variant="h4" style={ViewStyles.heading}>
        Smutek
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Smutek to uczucie żalu i przygnębienia, które może być wywołane przez
        różne sytuacje życiowe. To głęboka emocja, która często towarzyszy
        utracie lub rozczarowaniu.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany ze smutkiem: #607d8b
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista filmów wywołujących smutek:
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

export default SadnessView;
