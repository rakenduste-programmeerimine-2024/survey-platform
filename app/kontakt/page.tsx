import React from "react";
import { Container, Typography } from "@mui/material";
import KontaktInfo from "@/components/contact/KontaktInfo";

const Kontakt = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", my: 4 }}>
        Kontakt
      </Typography>
      <KontaktInfo />
    </Container>
  );
};

export default Kontakt;
