"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import supabase from "../../lib/supabaseClient";

const LooKusitlus = () => {
  const [questionText, setQuestionText] = useState("");
  const [description, setDescription] = useState("");
  const [maxAnswers, setMaxAnswers] = useState(2);
  const [options, setOptions] = useState(Array(2).fill(""));
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    if (options.length < maxAnswers) {
      setOptions([...options, ""]);
    }
  };

  const handleRemoveOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!questionText || options.length < 2 || options.some((o) => !o.trim())) {
      alert("Please fill in all fields and ensure at least 2 valid options.");
      return;
    }

    const { data: surveyData, error: surveyError } = await supabase
      .from("surveys")
      .insert([{ kirjeldus: description }])
      .select("id");

    if (surveyError) {
      console.error("Error creating survey:", surveyError.message);
      return;
    }

    const surveyId = surveyData[0].id;

    const { data: questionData, error: questionError } = await supabase
      .from("kusimus")
      .insert([{ survey_id: surveyId, text: questionText, vastuste_arv: maxAnswers }])
      .select("id");

    if (questionError) {
      console.error("Error creating question:", questionError.message);
      return;
    }

    const questionId = questionData[0].id;

    const optionData = options.map((optionText) => ({
      question_id: questionId,
      option_text: optionText,
    }));

    const { error: optionError } = await supabase.from("valikuvoimalused").insert(optionData);

    if (optionError) {
      console.error("Error creating options:", optionError.message);
      return;
    }
    setSuccessMessage("Your survey has been successfully saved!");

    setQuestionText("");
    setDescription("");
    setOptions(Array(2).fill(""));

    console.log("Survey successfully created!");
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2, color: "black" }}>
        Loo Küsitlus
      </Typography>

      <TextField
        label="Küsimus"
        fullWidth
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        sx={{
          mb: 2,
          backgroundColor: "white",
          "& .MuiInputBase-root": {
            backgroundColor: "white",
          },
        }}
      />

      <TextField
        label="Kirjeldus"
        fullWidth
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{
          mb: 2,
          backgroundColor: "white",
          "& .MuiInputBase-root": {
            backgroundColor: "white",
          },
        }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Vastuste arv</InputLabel>
        <Select
          value={maxAnswers}
          onChange={(e) => {
            const newMaxAnswers = Number(e.target.value);
            setMaxAnswers(newMaxAnswers);
            setOptions(Array(newMaxAnswers).fill(""));
          }}
          sx={{
            backgroundColor: "white",
            "& .MuiSelect-root": {
              backgroundColor: "white",
            },
          }}
        >
          {Array.from(Array(9).keys()).map((i) => (
            <MenuItem key={i + 2} value={i + 2}>
              {i + 2}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="h6" sx={{ mb: 2, color: "black" }}>
        Valikuvõimalused
      </Typography>

      {options.map((option, index) => (
        <Box key={index} display="flex" alignItems="center" sx={{ mb: 1 }}>
          <TextField
            fullWidth
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
            sx={{
              backgroundColor: "white",
              "& .MuiInputBase-root": {
                backgroundColor: "white",
              },
            }}
          />
          <Button
            onClick={() => handleRemoveOption(index)}
            disabled={options.length <= 2}
            sx={{
              ml: 1,
              backgroundColor: "#f44336",
              color: "white",
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
            }}
          >
            Remove
          </Button>
        </Box>
      ))}

      {options.length < maxAnswers && (
        <Button
          onClick={handleAddOption}
          sx={{
            backgroundColor: "#4caf50",
            color: "white",
            "&:hover": {
              backgroundColor: "#388e3c",
            },
          }}
        >
          Add Option
        </Button>
      )}

      <Box textAlign="center" sx={{ mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Loo Küsitlus
        </Button>
      </Box>

      {successMessage && (
        <Snackbar
          open={Boolean(successMessage)}
          autoHideDuration={6000}
          onClose={() => setSuccessMessage(null)}
        >
          <Alert
            onClose={() => setSuccessMessage(null)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {successMessage}
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default LooKusitlus;
