import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Lizard from "../Baby.jpg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate as Navigate,
} from "react-router-dom";

export default function MultiActionAreaCard({ image, content, title }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
          }}
          to="/blogSpecific"
        >
          <Button size="small" color="primary">
            Learn more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
