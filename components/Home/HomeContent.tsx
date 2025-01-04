import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const HomeContent = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Survey Platform
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover, participate, and create surveys effortlessly.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Browse Surveys</Typography>
              <Typography variant="body2">
                Explore a variety of surveys from different categories.
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Browse
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Create Surveys</Typography>
              <Typography variant="body2">
                Sign up and start creating your own surveys today.
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">View Results</Typography>
              <Typography variant="body2">
                Analyze survey responses with intuitive charts.
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                View Results
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContent;