// FearView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const FearView = () => {
  return (
    <Paper
      style={{ ...ViewStyles.paper, backgroundColor: "#3f51b5", color: "#fff" }}
    >
      <Typography variant="h4" style={ViewStyles.heading}>
        Strach
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Strach to silna, emocjonalna reakcja na zagrożenie. Oglądanie strasznych
        filmów może pobudzić układ nerwowy, powodując uczucie niepokoju i lęku.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany ze strachem: #3f51b5
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista strasznych filmów:
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

export default FearView;
