import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Meist
      </Typography>
      <Typography variant="body1" gutterBottom>
        QuestR on intuitiivne küsitlusplatvorm, mis aitab kasutajatel hõlpsasti
        küsitlusi luua, nendes osaleda ja tulemusi analüüsida.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Meie eesmärk on pakkuda lihtsat ja kiiret lahendust küsitluste loomiseks
        ja haldamiseks, olles samas paindlik ja kasutajasõbralik.
      </Typography>
    </Container>
  );
};

export default About;
