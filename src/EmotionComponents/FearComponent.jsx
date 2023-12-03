// W pliku FearComponent.js
import React from "react";
import { Link, Paper, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const FearComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getSquareSize = () => {
    return isLargeScreen ? 240 : "100%";
  };

  const squareStyle = {
    width: getSquareSize(),
    height: getSquareSize(),
    backgroundColor: indigo[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <Link href="/FearView">
      <Paper style={squareStyle}>
        <Typography variant="subtitle1">Strach</Typography>
        <Typography variant="body2">Przerażony i pełen niepokoju.</Typography>
      </Paper>
    </Link>
  );
};

export default FearComponent;
