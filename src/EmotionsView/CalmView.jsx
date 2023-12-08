// EmotionsView/CalmView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const CalmView = () => {
  return (
    <Paper style={{ ...ViewStyles.paper, backgroundColor: "#8bc34a" }}>
      <Typography variant="h4" style={ViewStyles.heading}>
        Spokój
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Spokój to uczucie wewnętrznego spokoju i zrelaksowania. To emocja, która
        pomaga radzić sobie z wyzwaniami życiowymi.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany ze spokojem: #8bc34a
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista filmów wywołujących spokój:
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

export default CalmView;
