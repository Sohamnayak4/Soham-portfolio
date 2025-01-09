import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

export default function About() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "800px", marginBottom: "3rem", textAlign: "center" }}
      >
        I’m Soham Nayak, a Mechanical Engineering student at IIT Bombay with a
        deep passion for technology and innovation. My journey in software
        development is driven by curiosity and the desire to build impactful
        solutions. From creating scalable web applications to exploring advanced
        ML algorithms, I’m constantly pushing the boundaries of what’s possible
        and embracing new challenges to grow as a developer and problem-solver.
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1200px" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CodeIcon
              sx={{ fontSize: 60, color: "#21517e", marginBottom: 2 }}
            />
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Technical Skills
            </Typography>
            <Typography variant="body2" align="center">
              JavaScript, Typescript, React, Node.js, Express, Next.js, MUI, HTML, CSS, Git,
              Docker, MongoDB, Python, Golang
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SchoolIcon
              sx={{ fontSize: 60, color: "#21517e", marginBottom: 2 }}
            />
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Education
            </Typography>
            <Typography variant="body2" align="center">
              Pursuing a B.Tech in Mechanical Engineering at IIT Bombay. Expected
              graduation: June 2026.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <EmojiObjectsIcon
              sx={{ fontSize: 60, color: "#21517e", marginBottom: 2 }}
            />
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Interests
            </Typography>
            <Typography variant="body2" align="center">
              Passionate about AI, machine learning, and web development. Always
              eager to learn and apply new technologies to solve real-world
              problems.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
