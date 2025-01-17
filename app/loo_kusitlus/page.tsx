"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

const loo_kusitlus = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState({ text: "", maxAnswers: 1 });

  // Handle change in title and description
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  // Handle question text change
  const handleQuestionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuestion({ ...question, text: event.target.value });
  };

  // Handle max answers change
  const handleMaxAnswersChange = (
    event: SelectChangeEvent<number>
  ) => {
    setQuestion({ ...question, maxAnswers: event.target.value as number });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Küsitluse pealkiri:", title);
    console.log("Küsitluse kirjeldus:", description);
    console.log("Küsimus:", question);
    // Siin saad andmed saata oma serverisse või API-le
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Siin lehel saad luua oma küsitluse
      </Typography>

      {/* Survey Title */}
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
          borderRadius: 0, // Remove rounded edges
        }}
      />

      {/* Survey Description */}
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
          borderRadius: 0, // Remove rounded edges
        }}
      />

      {/* Question */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Küsimus:
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Card variant="outlined" sx={{ borderRadius: 0 }}>
          <CardContent>
            {/* Question Text Input */}
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
                borderRadius: 0, // Remove rounded edges
              }}
              placeholder="Sisesta küsimus"
              InputProps={{
                style: { backgroundColor: "#fff", cursor: "pointer" },
              }}
            />

            {/* Max Answers */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Lubatud vastuste arv</InputLabel>
              <Select
                value={question.maxAnswers}
                onChange={handleMaxAnswersChange}
                label="Lubatud vastuste arv"
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

      {/* Submit Button */}
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
