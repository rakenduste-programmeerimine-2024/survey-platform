import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import TeamCard from "@/components/about/TeamCard";

const Meist = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", my: 4 }}>
        Meist
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
        Meie eesmärk on pakkuda parimat küsitlusteenust. Siin on meie tiim:
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TeamCard name="Marta Männik" role="Projektijuht" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamCard name="Kalle Kõiv" role="Arendaja" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamCard name="Laura Lepp" role="Disainer" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Meist;
