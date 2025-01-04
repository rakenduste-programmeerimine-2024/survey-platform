import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeContent from "../components/Home/HomeContent";

const Home = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Survey Platform</Typography>
        </Toolbar>
      </AppBar>
      <HomeContent />
    </>
  );
};

export default Home;
