"use client";

import React from "react";
import { Container, Typography, Box, Card, CardContent, Button, Grid } from "@mui/material";

const vaata_kusitlusi = () => {
  const surveys = [
    { id: 1, title: "Küsitlus 1", description: "See on esimene küsitlus" },
    { id: 2, title: "Küsitlus 2", description: "See on teine küsitlus" },
    { id: 3, title: "Küsitlus 3", description: "See on kolmas küsitlus" },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Vaata Küsitlusi
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
        Siin on kõik saadaolevad küsitlused:
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {surveys.map((survey) => (
          <Grid item xs={12} sm={6} md={4} key={survey.id}>
            <Card variant="outlined" sx={{ borderRadius: 0 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {survey.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {survey.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#3f51b5",
                    color: "#fff",
                    "&:hover": { bgcolor: "#303f9f" },
                  }}
                >
                  Vaata Küsitlust
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default vaata_kusitlusi;
