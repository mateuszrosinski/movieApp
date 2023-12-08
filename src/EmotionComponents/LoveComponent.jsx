// W pliku LoveComponent.js
import React from "react";
import { Paper, Typography, Link } from "@mui/material";
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
    <Link href="/LoveView" underline="none">
      {/* Dodaj link do podstrony "Miłości" */}
      <Paper style={squareStyle}>
        <Typography variant="subtitle1">Miłość</Typography>
        <Typography variant="body2">Pełen ciepła i uczucia.</Typography>
      </Paper>
    </Link>
  );
};

export default LoveComponent;
