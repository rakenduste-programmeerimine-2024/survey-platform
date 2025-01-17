"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

const vaata_tulemusi = () => {
  const [survey, setSurvey] = useState<any>(null);

  useEffect(() => {
    const fetchSurveyData = () => {
      const surveyData = {
        title: "Küsitlus 1",
        description: "See on küsitlus, kus uurime inimeste eelistusi.",
        question: {
          text: "Kas sulle meeldib kodune kohv?",
          answers: [
            { answer: "Jah", count: 80 },
            { answer: "Ei", count: 40 },
          ],
        },
      };
      setSurvey(surveyData);
    };

    fetchSurveyData();
  }, []);

  if (!survey) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Laen küsitluse tulemusi...
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        {survey.title}
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
        {survey.description}
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Küsimus:
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {survey.question.text}
            </Typography>

            <Typography variant="h6" sx={{ mb: 2 }}>
              Vastused:
            </Typography>
            {survey.question.answers.map((answer: any, index: number) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1">
                  <strong>{answer.answer}</strong>: {answer.count} vastust
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#3f51b5",
            color: "#fff",
            "&:hover": { bgcolor: "#303f9f" },
          }}
          onClick={() => {
            window.history.back();
          }}
        >
          Tagasi
        </Button>
      </Box>
    </Container>
  );
};

export default vaata_tulemusi;
