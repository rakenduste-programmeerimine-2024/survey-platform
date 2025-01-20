"use client";

import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Snackbar, Alert } from "@mui/material";
import supabase from "../../lib/supabaseClient";

const VaataKusitlusi = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from("kusimus")
        .select("id, text, vastuste_arv, valikuvoimalused (id, option_text)")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching questions:", error.message);
      } else {
        setQuestions(data);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId: number, selectedOption: string) => {
    setAnswers((prevAnswers: Record<number, string>) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = async () => {
    const answerData = Object.entries(answers).map(([questionId, selectedOption]) => ({
      question_id: questionId,
      selected_option: selectedOption,
    }));

    const { error } = await supabase.from("answers").insert(answerData);

    if (error) {
      console.error("Error submitting answers:", error.message);
    } else {
      setSuccessMessage("Your answers have been successfully submitted!");
    }
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2, color: "black" }}>
        Vaata Küsitlusi
      </Typography>

      {questions.map((question) => (
        <Box key={question.id} sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {question.text}
          </Typography>

          <FormControl component="fieldset">
            <FormLabel component="legend">Vastused</FormLabel>
            <RadioGroup
              value={answers[question.id] || ""}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            >
              {question.valikuvoimalused.map((option: any) => (
                <FormControlLabel
                  key={option.id}
                  value={option.option_text}
                  control={<Radio />}
                  label={option.option_text}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      ))}

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
          Submit Answers
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

export default VaataKusitlusi;
