import React from "react";
import { Link, Paper, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const SadnessComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getSquareSize = () => {
    return isLargeScreen ? 240 : "100%";
  };

  const squareStyle = {
    width: getSquareSize(),
    height: getSquareSize(),
    backgroundColor: purple[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <Link href="/SadnessView">
      <Paper style={squareStyle}>
        <Typography variant="subtitle1">Smutek</Typography>
        <Typography variant="body2">Trochę przygnębiony i smutny.</Typography>
      </Paper>
    </Link>
  );
};

export default SadnessComponent;
