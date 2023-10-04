import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import pregnantwoman from '../mother.jpg';

export default function BlogPost() {

    const tagsData = {
        "Blogs": [
            {
                title: "Your baby's breathing: what's normal",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                author: "Mamta",
                Image:{pregnantwoman}
            },
            {
                title: "Your baby's breathing: what's normal",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                author: "Sarah",
                Image:{pregnantwoman}
            }, {
              title: "Your baby's breathing: what's normal",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              author: "Sarah",
              Image:{pregnantwoman}
          },
        ],
        
    };
    // const tags={
    //     "Pregnancy","Tips for getting pregnant"
        
    // }

  return (
    <Container>
      {Object.entries(tagsData).map(([tag, blogList], index) => (
        <Box key={index} my={3} >

          <Typography variant="h4" style={{display:"flex",marginBottom:"3rem"}}>{tag}</Typography>
          <Grid container spacing={3}>
            {blogList.map((blog, blogIndex) => (
              <Grid key={blogIndex} item xs={12} sm={6} md={4} >
                <Paper elevation={3} style={{width:"auto"}}>
                  <img src={pregnantwoman} alt="" style={{ width: '50%', height: '50%' }} />
                  <Box p={2}>
                    <Typography variant="h6"><a href="/" style={{textDecoration:"none",color:"black"}}>{blog.title}</a></Typography>
                    <Typography variant="body1">{blog.text}</Typography>
                    <Typography variant="body2">Author: {blog.author}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}