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
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: 600 }}>
        Tere tulemast QuestR küsitlus lehele
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: "center", color: "text.secondary" }}>
        Avasta, osale ja loo küsitlusi kiirelt ja lihtsalt.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "#f7f7f7" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Vaata küsitlusi
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Avasta erivaldkondade küsitlusi mis sulle huvi pakuvad.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "#3f51b5",
                  color: "#fff", 
                  "&:hover": {
                    bgcolor: "#303f9f", 
                    color: "#fff", 
                  },
                  width: "100%",
                }}
              >
                Vaata
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "#f7f7f7" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Loo küsitlus
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Registreeru ja alusta oma küsitluste loomist.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "#3f51b5",
                  color: "#fff", 
                  "&:hover": {
                    bgcolor: "#303f9f", 
                    color: "#fff", 
                  },
                  width: "100%",
                }}
              >
                Alusta
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "#f7f7f7" }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Vaata tulemusi
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Analüüsi küsitluse vastusi erinevate diagrammidega.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "#3f51b5",
                  color: "#fff", 
                  "&:hover": {
                    bgcolor: "#303f9f", 
                    color: "#fff", 
                  },
                  width: "100%",
                }}
              >
                Vaata tulemusi
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContent;
