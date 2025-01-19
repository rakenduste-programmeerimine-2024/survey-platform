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
} from "@mui/material";
import supabase from "../../lib/supabaseClient";

const LooKusitlus = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [maxAnswers, setMaxAnswers] = useState(2);
  const [options, setOptions] = useState(["", ""]); // Start with 2 options

  interface OptionChangeHandler {
    (index: number, value: string): void;
  }

  const handleOptionChange: OptionChangeHandler = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    if (options.length < 10) {
      setOptions([...options, ""]);
    }
  };

  interface RemoveOptionHandler {
    (index: number): void;
  }

  const handleRemoveOption: RemoveOptionHandler = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    // Validate inputs
    if (!title || !questionText || options.length < 2 || options.some((o) => !o.trim())) {
      alert("Please fill in all fields and ensure at least 2 valid options.");
      return;
    }

    // Insert survey
    const { data: surveyData, error: surveyError } = await supabase
      .from("surveys")
      .insert([{ title, description }])
      .select("id");

    if (surveyError) {
      console.error("Error creating survey:", surveyError.message);
      return;
    }

    const surveyId = surveyData[0].id;

    // Insert question
    const { data: questionData, error: questionError } = await supabase
      .from("questions")
      .insert([{ survey_id: surveyId, text: questionText, max_answers: maxAnswers }])
      .select("id");

    if (questionError) {
      console.error("Error creating question:", questionError.message);
      return;
    }

    const questionId = questionData[0].id;

    // Insert answer options
    const optionData = options.map((optionText) => ({
      question_id: questionId,
      option_text: optionText,
    }));

    const { error: optionError } = await supabase.from("answer_options").insert(optionData);

    if (optionError) {
      console.error("Error creating options:", optionError.message);
      return;
    }

    console.log("Survey successfully created!");
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Loo Küsitlus
      </Typography>
      <TextField
        label="Küsitluse Pealkiri"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Vastuste arv</InputLabel>
        <Select
          value={maxAnswers}
          onChange={(e) => setMaxAnswers(Number(e.target.value))}
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
      <Typography variant="h6" sx={{ mb: 2 }}>
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
      <Button
        onClick={handleAddOption}
        disabled={options.length >= 10}
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
    </Container>
  );
};

export default LooKusitlus;
