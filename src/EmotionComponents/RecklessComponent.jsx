// W pliku FearComponent.js
import React from "react";
import { Link, Paper, Typography } from "@mui/material";
import { lime } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const RecklessComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getSquareSize = () => {
    return isLargeScreen ? 240 : "100%";
  };

  const squareStyle = {
    width: getSquareSize(),
    height: getSquareSize(),
    backgroundColor: lime[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <Link href="/RecklessView" underline="none">
      <Paper style={squareStyle}>
        <Typography variant="subtitle1">Beztroski</Typography>
        <Typography variant="body2">Dobry nastrój, brak zmartwień.</Typography>
      </Paper>
    </Link>
  );
};

export default RecklessComponent;
