import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Card, CardContent, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from "@mui/material";
import supabase from "lib/supabaseClient.ts";

const loo_kusitlus = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState({ text: "", maxAnswers: 1 });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion({ ...question, text: event.target.value });
  };

  const handleMaxAnswersChange = (event: SelectChangeEvent<number>) => {
    setQuestion({ ...question, maxAnswers: event.target.value as number });
  };

  const handleSubmit = async () => {
    // Insert survey into Supabase
    const { data: surveyData, error: surveyError } = await supabase
      .from("surveys")
      .insert([{ title, description }]);

    if (surveyError) {
      console.error("Error inserting survey:", surveyError.message);
      return;
    }

    const surveyId = surveyData?.[0]?.id;

    // Insert question into Supabase
    const { data: questionData, error: questionError } = await supabase
      .from("questions")
      .insert([{ survey_id: surveyId, text: question.text, max_answers: question.maxAnswers }]);

    if (questionError) {
      console.error("Error inserting question:", questionError.message);
      return;
    }

    console.log("Survey and question successfully added!");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Siin lehel saad luua oma küsitluse
      </Typography>

      <TextField
        label="Küsitluse pealkiri"
        fullWidth
        variant="outlined"
        value={title}
        onChange={handleTitleChange}
        sx={{
          mb: 3,
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: 0,
        }}
      />

      <TextField
        label="Küsitluse kirjeldus"
        fullWidth
        variant="outlined"
        multiline
        rows={4}
        value={description}
        onChange={handleDescriptionChange}
        sx={{
          mb: 3,
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: 0,
        }}
      />

      <Typography variant="h6" sx={{ mb: 2 }}>
        Küsimus:
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Card variant="outlined" sx={{ borderRadius: 0 }}>
          <CardContent>
            <TextField
              label="Küsimus"
              fullWidth
              variant="outlined"
              value={question.text}
              onChange={handleQuestionChange}
              sx={{
                mb: 2,
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: 0,
              }}
              placeholder="Sisesta küsimus"
              InputProps={{
                style: { backgroundColor: "#fff", cursor: "pointer" },
              }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Vastuste arv</InputLabel>
              <Select
                value={question.maxAnswers}
                onChange={handleMaxAnswersChange}
                label="Vastuste arv"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                  <MenuItem key={number} value={number}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#3f51b5",
            color: "#fff",
            "&:hover": {
              bgcolor: "#303f9f",
            },
          }}
          onClick={handleSubmit}
        >
          Loo Küsitlus
        </Button>
      </Box>
    </Container>
  );
};

export default loo_kusitlus;
