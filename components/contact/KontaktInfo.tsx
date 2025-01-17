import React from "react";
import { Box, Typography, Divider } from "@mui/material";

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
      <Divider
        sx={{
          bgcolor: "#3f51b5",
          height: 2,
          width: "20%",
          mx: "auto",
          mb: 2,
        }}
      />
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
