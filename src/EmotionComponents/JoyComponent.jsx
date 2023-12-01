// W pliku JoyComponent.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const JoyComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getSquareSize = () => {
    return isLargeScreen ? 240 : "100%";
  };

  const squareStyle = {
    width: getSquareSize(),
    height: getSquareSize(),
    backgroundColor: red[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <Paper style={squareStyle}>
      <Typography variant="subtitle1">Radość</Typography>
      <Typography variant="body2">Pełen entuzjazmu i uśmiechu.</Typography>
    </Paper>
  );
};

export default JoyComponent;
