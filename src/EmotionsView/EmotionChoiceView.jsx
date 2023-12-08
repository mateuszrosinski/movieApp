import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DisappointmentComponent from "../EmotionComponents/DisappointmentComponent";
import JoyComponent from "../EmotionComponents/JoyComponent";
import LoveComponent from "../EmotionComponents/LoveComponent";
import FearComponent from "../EmotionComponents/FearComponent";
import AngerComponent from "../EmotionComponents//AngerComponent";
import CalmComponent from "../EmotionComponents/CalmComponent";
import OptimismComponent from "../EmotionComponents/OptimismComponent";
import SadnessComponent from "../EmotionComponents/SadnessComponent";
import SurpriseComponent from "../EmotionComponents/SurpriseComponent";
import RecklessComponent from "../EmotionComponents/RecklessComponent";

const defaultTheme = createTheme();

const EmotionChoiceView = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
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
              Wirtualny asystent pomoże Ci z szukaniem filmu.
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Poniżej znajduje się lista emocji:
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
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
    </ThemeProvider>
  );
};
export default EmotionChoiceView;
