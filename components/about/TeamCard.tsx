import React from "react";
import { Card, CardContent, Typography, Avatar} from "@mui/material";

const TeamCard = ({ name, role, imageSrc }: { name: string; role: string; imageSrc: string;}) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, mb: 2, bgcolor: "#f5f5f5",
      "&:hover": {
      boxShadow: 6, 
      transform: "translateY(-5px)", 
      },
      transition: "all 0.3s ease",
    }}>

        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
