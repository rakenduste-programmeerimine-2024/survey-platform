import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BarChartIcon from "@mui/icons-material/BarChart";


const HomeContent = () => {
  return (
    <Container sx={{ mt: 4, py: 6, px: 3,
      backgroundImage: "url('/background.jpg')", 
      backgroundSize: "cover", 
      backgroundPosition: "center",
      borderRadius: 2, 
      boxShadow: 3,
    }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: 600 }}>
        Tere tulemast QuestR küsitlus lehele
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: "center", color: "text.secondary" }}>
        Avasta, osale ja loo küsitlusi kiirelt ja lihtsalt.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "#ffffff", border: "1px solid #e0e0e0",
            transition: "transform 0.3s, box-shadow 0.3s", 
              "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              },
          }}>
            <CardContent sx={{ textAlign: "center" }}>
            <Link href="/vaata_kusitlusi" passHref>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1}}>
                Vaata küsitlusi
              </Typography>
              <Typography variant="body2" sx={{ color: "#757575", mb: 2}}>
                Avasta erivaldkondade küsitlusi mis sulle huvi pakuvad.
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
                sx={{
                  mt: 2,
                  bgcolor: "#3f51b5",
                  color: "#fff",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#303f9f",
                    color: "#fff",
                  },
                  width: "100%",
                }}
              >
                Vaata
              </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "#ffffff", border: "1px solid #e0e0e0",
            transition: "transform 0.3s, box-shadow 0.3s", 
              "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              },
          }}>
            <CardContent sx={{ textAlign: "center" }}>
            <Link href="/loo_kusitlus" passHref>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1}}>
                Loo küsitlus
              </Typography>
              <Typography variant="body2" sx={{ color: "#757575", mb: 2}}>
                Registreeru ja alusta oma küsitluste loomist.
              </Typography>
              <Button
                variant="contained"
                startIcon={<BarChartIcon />}
                sx={{
                  mt: 2,
                  bgcolor: "#3f51b5",
                  color: "#fff", 
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#303f9f", 
                    color: "#fff", 
                  },
                  width: "100%",
                }}
              >
                Alusta
              </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, bgcolor: "#ffffff", border: "1px solid #e0e0e0",
            transition: "transform 0.3s, box-shadow 0.3s", 
              "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
              },
          }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Link href="/vaata_tulemusi" passHref>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1}}>
                Vaata tulemusi
              </Typography>
              <Typography variant="body2" sx={{ color: "#757575", mb: 2}}>
                Analüüsi küsitluse vastusi erinevate diagrammidega.
              </Typography>
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{
                  mt: 2,
                  bgcolor: "#3f51b5",
                  color: "#fff",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#303f9f",
                    color: "#fff",
                  },
                  width: "100%",
                }}
              >
                Vaata tulemusi
              </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeContent;
