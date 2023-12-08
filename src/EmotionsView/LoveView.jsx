// LoveView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const LoveView = () => {
  return (
    <Paper style={{ ...ViewStyles.paper, backgroundColor: "#e91e63" }}>
      <Typography variant="h4" style={ViewStyles.heading}>
        Miłość
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Miłość to jedna z najpiękniejszych emocji, charakteryzująca się silnym
        uczuciem przywiązania i bliskości.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany z miłością: #e91e63
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista filmów wywołujących miłość:
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

export default LoveView;
