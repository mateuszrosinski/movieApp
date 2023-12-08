// W pliku FearComponent.js
import React from "react";
import { Link, Paper, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const AngerComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getSquareSize = () => {
    return isLargeScreen ? 240 : "100%";
  };

  const squareStyle = {
    width: getSquareSize(),
    height: getSquareSize(),
    backgroundColor: deepPurple[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <Link href="/AngerView" underline="none">
      <Paper style={squareStyle}>
        <Typography variant="subtitle1">Złość</Typography>
        <Typography variant="body2">Sfrustrowany i zagniewany.</Typography>
      </Paper>
    </Link>
  );
};

export default AngerComponent;
