// EmotionsView/DisappointmentView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const DisappointmentView = () => {
  return (
    <Paper style={{ ...ViewStyles.paper, backgroundColor: "#795548" }}>
      <Typography variant="h4" style={ViewStyles.heading}>
        Rozczarowanie
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Rozczarowanie to uczucie spowodowane niezdolnością do spełnienia
        oczekiwań. To emocja towarzysząca smutkowi i niezadowoleniu.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany z rozczarowaniem: #795548
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista filmów wywołujących rozczarowanie:
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

export default DisappointmentView;
