import React from "react";
import { Box, Typography, Divider, Button} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const KontaktInfo = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 4, p: 4, bgcolor: "linear-gradient(135deg, #e3f2fd, #f5f5f5)",
      boxShadow: 3, 
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
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
        <EmailIcon sx={{ color: "#3f51b5", mr: 1 }} />
        <Typography variant="body1">GuestR@mail.com</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PhoneIcon sx={{ color: "#3f51b5", mr: 1 }} />
        <Typography variant="body1">+372 5555 5555</Typography>
      </Box>
      <Button
        variant="contained"
        startIcon={<EmailIcon />}
        sx={{
          mt: 2,
          bgcolor: "primary.main",
          color: "#fff",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "primary.dark",
          },
          px: 4,
          py: 1.5,
          borderRadius: 2,
        }}
      >
        Kirjuta meile
      </Button>
    </Box>
  );
};

export default KontaktInfo;
