// EmotionsView/JoyView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const JoyView = () => {
  return (
    <Paper
      style={{
        ...ViewStyles.paper,
        backgroundColor: "#e7eb23",
      }}
    >
      <Typography variant="h4" style={ViewStyles.heading}>
        Radość
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Radość to jedna z najpozytywniejszych emocji, charakteryzująca się
        uczuciem szczęścia, entuzjazmu i pozytywnego podejścia do życia.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany z radością: #ffeb3b
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista filmów wywołujących radość:
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

export default JoyView;
