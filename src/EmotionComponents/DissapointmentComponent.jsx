import React from "react";
import { Paper, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const DissapointmentComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getSquareSize = () => {
    return isLargeScreen ? 240 : "100%";
  };

  const squareStyle = {
    width: getSquareSize(),
    height: getSquareSize(),
    backgroundColor: cyan[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <Paper style={squareStyle}>
      <Typography variant="subtitle1">Rozczarowanie</Typography>
      <Typography variant="body2">"Trochę rozczarowany i przybity."</Typography>
    </Paper>
  );
};

export default DissapointmentComponent;
