import React from "react";
import { Box, Typography } from "@mui/material";

const KontaktInfo = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4, p: 4, bgcolor: "#f5f5f5", boxShadow: 3, 
      borderRadius: 2, 
      maxWidth: 400, 
      mx: "auto"
      }}>
      <Typography variant="h6" gutterBottom>
        Võta meiega ühendust
      </Typography>
      <Typography variant="body1">
        Email: GuestR@mail.com
      </Typography>
      <Typography variant="body1">
        Telefon: +372 5555 5555
      </Typography>
    </Box>
  );
};

export default KontaktInfo;
