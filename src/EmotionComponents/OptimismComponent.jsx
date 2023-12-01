import React from "react";
import { Paper, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const OptimismComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getSquareSize = () => {
    return isLargeScreen ? 240 : "100%";
  };

  const squareStyle = {
    width: getSquareSize(),
    height: getSquareSize(),
    backgroundColor: lightBlue[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <Paper style={squareStyle}>
      <Typography variant="subtitle1">Optymizm</Typography>
      <Typography variant="body2">Pełen pozytywnej energii.</Typography>
    </Paper>
  );
};

export default OptimismComponent;
