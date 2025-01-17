import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import TeamCard from "@/components/about/TeamCard";


const Meist = () => {
  return (
    <Container sx={{ py: 6, bgcolor: "#e3f2fd", borderRadius: 3, boxShadow: 3,}}>
      <Typography variant="h4" sx={{ textAlign: "center", my: 4 }}>
        Meist
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
        Meie eesmärk on pakkuda parimat küsitlusteenust. Siin on meie tiim:
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TeamCard name="Kaspar Merisalu" role="Arendaja" imageSrc="https://via.placeholder.com/150"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamCard name="Hannes Väster" role="Arendaja" imageSrc="https://via.placeholder.com/150"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>

          <TeamCard name="Erik Brück" role="Arendaja" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamCard name="Madis Valliste" role="Arendaja" imageSrc="https://via.placeholder.com/150"/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Meist;