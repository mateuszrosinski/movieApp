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
import DisappointmentComponent from "./EmotionComponents/DisappointmentComponent";
import JoyComponent from "./EmotionComponents/JoyComponent";
import LoveComponent from "./EmotionComponents/LoveComponent";
import FearComponent from "./EmotionComponents/FearComponent";
import AngerComponent from "./EmotionComponents/AngerComponent";
import CalmComponent from "./EmotionComponents/CalmComponent";
import OptimismComponent from "./EmotionComponents/OptimismComponent";
import SadnessComponent from "./EmotionComponents/SadnessComponent";
import SurpriseComponent from "./EmotionComponents/SurpriseComponent";
import RecklessComponent from "./EmotionComponents/RecklessComponent";

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
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="/RegistrationForm">
                <Button variant="contained">Zarejestruj się</Button>
              </Link>
              {/* <Link href="/LoginForm">
                <Button variant="contained">Mam juz konto</Button>
              </Link> */}
            </Stack>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
              paddingBottom="10px"
            >
              <Link href="/LoginForm">
                <Button>Mam juz konto</Button>
              </Link>
            </Stack>
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
              <Link href="/EmotionChoiceView">
                <Button variant="contained">Zaczynajmy</Button>
              </Link>
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
              <DisappointmentComponent />
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
