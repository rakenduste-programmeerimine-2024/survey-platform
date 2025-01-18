import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const TeamCard = ({
  name,
  role,
  imageSrc,
}: {
  name: string;
  role: string;
  imageSrc: string;
}) => {
  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        mb: 2,
        bgcolor: "#f5f5f5",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-5px)",
        },
        transition: "all 0.3s ease",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar
          src={imageSrc}
          alt={`${name}'s photo`}
          sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
        />
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
