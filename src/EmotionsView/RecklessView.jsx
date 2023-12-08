// EmotionsView/RecklessView.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import ViewStyles from "./View";

const RecklessView = () => {
  return (
    <Paper
      style={{
        ...ViewStyles.paper,
        backgroundColor: "lime",
      }}
    >
      <Typography variant="h4" style={ViewStyles.heading}>
        Beztroska
      </Typography>
      <Typography variant="body1" style={ViewStyles.description}>
        Beztroska to stan braku troski i niefrasobliwości. To uczucie, które
        pozwala na swobodne podejście do życia, nie martwiąc się zbytnio o
        konsekwencje.
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Kolor związany z beztroską: #ff5722
      </Typography>
      <Typography variant="h6" style={ViewStyles.colorAssociated}>
        Lista filmów wywołujących beztroskę:
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

export default RecklessView;
