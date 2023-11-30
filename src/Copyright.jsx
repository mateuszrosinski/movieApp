import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const emotionsData = [
  { name: "Radość", description: "Pełen entuzjazmu i uśmiechu!" },
  { name: "Zaskoczenie", description: "Zdziwiony i pod wrażeniem." },
  { name: "Smutek", description: "Trochę przygnębiony i smutny." },
  { name: "Złość", description: "Sfrustrowany i zagniewany." },
  { name: "Strach", description: "Przerażony i pełen niepokoju." },
  { name: "Miłość", description: "Pełen ciepła i uczucia." },
  { name: "Optymizm", description: "Pełen pozytywnej energii." },
  { name: "Zawód", description: "Trochę rozczarowany i przybity." },
  { name: "Spokój", description: "Cichy i zrelaksowany." },
];

const squareStyle = {
  width: "240px",
  height: "240px",
  backgroundColor: blue[500],
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
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
            {emotionsData.map((emotion, index) => (
              <Grid item key={index} xs={4}>
                <Paper style={squareStyle}>
                  <Typography variant="subtitle1">{emotion.name}</Typography>
                  <Typography variant="body2">{emotion.description}</Typography>
                </Paper>
              </Grid>
            ))}
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
