// EmotionsView/AngerView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const AngerView = () => {
  return (
    <Paper
      style={{
        ...ViewStyles.paper,
        backgroundColor: "#f44336",
      }}
    >
      <Typography variant="h4" style={ViewStyles.heading}>
        Złość
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Złość to silna emocja, często wywołana uczuciem niezadowolenia lub
        frustracji. Oglądanie filmów, które poruszają temat złości, może
        prowokować intensywne reakcje.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany ze złością: #f44336
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista filmów wywołujących złość:
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

export default AngerView;
