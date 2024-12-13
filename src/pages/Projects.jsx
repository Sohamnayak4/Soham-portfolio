import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectItem = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  codeLink,
}) => (
  <Paper elevation={3} sx={{ p: 3, mb: 4, width: "100%" }}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
          alt={title}
          src={image}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>Technologies used:</strong> {technologies.join(", ")}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<LaunchIcon />}
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
          <Button
            variant="outlined"
            startIcon={<CodeIcon />}
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Paper>
);

export default function Projects() {
  const projects = [
    {
      title: "Task Management System",
      description:
        "A collaborative task management system with real-time updates, user authentication and task filtering system.",
      image: "images/project1.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "tasks.sohamnayak.tech",
      codeLink: "https://github.com/Sohamnayak4/Task-Manager-app",
    },
  ];

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
        Projects
      </Typography>
      <Box sx={{ maxWidth: "1200px", width: "100%" }}>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </Box>
    </Box>
  );
}
