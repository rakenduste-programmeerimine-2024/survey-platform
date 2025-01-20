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
    <Container sx={{mt: 4, p: 4, borderRadius: 2,
      background: "linear-gradient(to right, #f3f4f6, #e3e6ea)",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", fontWeight: 600, color:"black"}}>
        Tere tulemast QuestR küsitluste lehele
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ textAlign: "center", color: "text.secondary" }}>
        Avasta, osale ja loo küsitlusi kiirelt ja lihtsalt.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: "#ffffff",
            border: "1px solid #e0e0e0",
            transition: "transform 0.3s, box-shadow 0.3s",
            minHeight: "360px",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            }
          }}>
            <CardContent sx={{ textAlign: "center", padding: "30px" }}>
              <Link href="/vaata_kusitlusi" passHref>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontSize: "1.5rem" }}>
                  Vaata küsitlusi
                </Typography>
                <Typography variant="body1" sx={{ color: "#757575", mb: 3, fontSize: "1.125rem" }}>
                  Avasta huvipakkuvaid küsitlusi.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                  sx={{
                    mt: 2,
                    bgcolor: "#3f51b5 !important",
                    color: "#fff !important",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "#303f9f !important",
                      color: "#fff !important",
                    },
                    width: "100%",
                    height: "60px",
                  }}
                >
                  Vaata
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: "#ffffff",
            border: "1px solid #e0e0e0",
            transition: "transform 0.3s, box-shadow 0.3s",
            minHeight: "360px",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            }
          }}>
            <CardContent sx={{ textAlign: "center", padding: "30px" }}>
              <Link href="/loo_kusitlus" passHref>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontSize: "1.5rem" }}>
                  Loo küsitlus
                </Typography>
                <Typography variant="body1" sx={{ color: "#757575", mb: 3, fontSize: "1.125rem" }}>
                  Registreeru ja alusta oma küsitluste loomist.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<BarChartIcon />}
                  sx={{
                    mt: 2,
                    bgcolor: "#3f51b5 !important",
                    color: "#fff !important",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "#303f9f !important",
                      color: "#fff !important",
                    },
                    width: "100%",
                    height: "60px",
                  }}
                >
                  Alusta
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: "#ffffff",
            border: "1px solid #e0e0e0",
            transition: "transform 0.3s, box-shadow 0.3s",
            minHeight: "360px",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            }
          }}>
            <CardContent sx={{ textAlign: "center", padding: "30px" }}>
              <Link href="/vaata_tulemusi" passHref>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontSize: "1.5rem" }}>
                  Vaata tulemusi
                </Typography>
                <Typography variant="body1" sx={{ color: "#757575", mb: 3, fontSize: "1.125rem" }}>
                  Analüüsi küsitluse vastusi erinevate diagrammidega.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<SearchIcon />}
                  sx={{
                    mt: 2,
                    bgcolor: "#3f51b5 !important",
                    color: "#fff !important",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "#303f9f !important",
                      color: "#fff !important",
                    },
                    width: "100%",
                    height: "60px",
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
