import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./cardHome.css"

export default function CardHome() {
  return (
    <Card className="cardHome" sx={{ maxWidth: 1200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="/src/image/todo.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Homework application
          </Typography>
          <Typography variant="body1" color="text.primary">
            Welcome to the application to carry out your tasks in a more
            organized way, this system will help you organize your pending tasks
            in such a way that you can fulfill all the duties on time.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
