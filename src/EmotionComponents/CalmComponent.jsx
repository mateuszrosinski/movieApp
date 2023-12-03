import React from "react";
import { Link, Paper, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const CalmComponent = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const getSquareSize = () => {
    return isLargeScreen ? 240 : "100%";
  };

  const squareStyle = {
    width: getSquareSize(),
    height: getSquareSize(),
    backgroundColor: teal[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <Link href="/CalmView">
      <Paper style={squareStyle}>
        <Typography variant="subtitle1" align="center">
          Spokój
        </Typography>
        <Typography variant="body2">Cichy i zrelaksowany.</Typography>
      </Paper>
    </Link>
  );
};

export default CalmComponent;
