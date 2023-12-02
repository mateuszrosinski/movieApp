// W pliku LoveComponent.js
import React from "react";
<<<<<<< HEAD
import { Paper, Typography, Link } from "@mui/material";

>>>>>>> 6e84313b23e4ad16724d1aca899b153f9a940aee
import { pink } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const LoveComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getSquareSize = () => {
    return isLargeScreen ? 240 : "100%";
  };

  const squareStyle = {
    width: getSquareSize(),
    height: getSquareSize(),
    backgroundColor: pink[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  return (
<<<<<<< HEAD
    <Link href="/LoveView">
      {/* Dodaj link do podstrony "Miłości" */}
      <Paper style={squareStyle}>
        <Typography variant="subtitle1">Miłość</Typography>
        <Typography variant="body2">Pełen ciepła i uczucia.</Typography>
      </Paper>
    </Link>
=======

>>>>>>> 6e84313b23e4ad16724d1aca899b153f9a940aee
  );
};

export default LoveComponent;
