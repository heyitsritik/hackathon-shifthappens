import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "../WOMEN.png";
import scene from "../IMAGE.jpeg";
import Box from '@mui/material/Box';
import baby from '../Baby.jpg'
import community from '../Community.jpg'

export default function Example(props) {
  var items = [
    {
      name: "Knowledge, Advice and support",
      description: "Join our community",
      image : community
    },
    {
      name: "How's your baby developing",
      description: "Show my baby's development",
      image: baby,

    },
    // {
    //   name: "Random Name #2",
    //   // description: "Hello World!",
    // },
  ];

  return (
    <Carousel
      sx={{
        width: "100%",
        // backgroundBlendMode: "overlay",
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <div>
        <img style={{ height: "700px", width: "100%" }} src={props.item.image} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position : "absolute",
          top : "17rem",
          right : "32rem"
        }}
      >
        <h2 style={{color : "white", fontSize : "3rem"}}>{props.item.name}</h2>
        <p></p>
        <Box textAlign="center">
          <Button variant="contained">{props.item.description}</Button>
        </Box>
      </div>
    </Paper>
  );
}
