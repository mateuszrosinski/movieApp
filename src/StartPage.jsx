import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  deepGreen,
} from "@mui/material/colors";
import DissapointmentComponent from "./EmotionComponents/DissapointmentComponent";
import JoyComponent from "./EmotionComponents/JoyComponent";
import LoveComponent from "./EmotionComponents/LoveComponent";
import FearComponent from "./EmotionComponents/FearComponent";
import AngerComponent from "./EmotionComponents/AngerComponent";
import CalmComponent from "./EmotionComponents/CalmComponent";
import OptimismComponent from "./EmotionComponents/OptimismComponent";
import SadnessComponent from "./EmotionComponents/SadnessComponent";
import SurpriseComponent from "./EmotionComponents/SurpriseComponent";
import RecklessComponent from "./EmotionComponents/RecklessComponent";
const emotionsData = [
  {
    name: "Radość",
    description: "Pełen entuzjazmu i uśmiechu.",
    color: red[500],
  },
  {
    name: "Zaskoczenie",
    description: "Zdziwiony i pod wrażeniem.",
    color: pink[500],
  },
  {
    name: "Smutek",
    description: "Trochę przygnębiony i smutny.",
    color: purple[500],
  },
  {
    name: "Złość",
    description: "Sfrustrowany i zagniewany.",
    color: deepPurple[500],
  },
  {
    name: "Strach",
    description: "Przerażony i pełen niepokoju.",
    color: indigo[500],
  },
  { name: "Miłość", description: "Pełen ciepła i uczucia.", color: blue[500] },
  {
    name: "Optymizm",
    description: "Pełen pozytywnej energii.",
    color: lightBlue[500],
  },
  {
    name: "Zawód",
    description: "Trochę rozczarowany i przybity.",
    color: cyan[500],
  },
  { name: "Spokój", description: "Cichy i zrelaksowany.", color: teal[500] },
];

const squareStyle = {
  width: "240px",
  height: "240px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        MoodyMovie.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StartPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MovieFilterIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Moody Movie
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Znajdę dla Ciebie odpowiedni seans
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Moody Movie zostało stworzone by pomoć Ci z doborem filmu w
              zależności od Twojego nastroju. Zaraz wybierzesz emocje które Ci
              towarzyszą, na podstawie Twojego wyboru polecimy film który będzie
              odpowiedni.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Zaczynajmy</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <JoyComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <LoveComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <FearComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <AngerComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <CalmComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <DissapointmentComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <OptimismComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <SadnessComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <SurpriseComponent />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <RecklessComponent />
            </Grid>
            {/* Dodaj pozostałe komponenty dla innych emocji tutaj */}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Moody Movie
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Poinformuj nas jak się czujesz, a my dobierzemy dla Ciebie coś super!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}