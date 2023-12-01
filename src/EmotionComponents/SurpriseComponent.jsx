import React from "react";
import { Paper, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const SurpriseComponent = () => {
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
    <Paper style={squareStyle}>
      <Typography variant="subtitle1">Zaskoczenie</Typography>
      <Typography variant="body2">Zdziwiony i pod wrażeniem.</Typography>
    </Paper>
  );
};

export default SurpriseComponent;
