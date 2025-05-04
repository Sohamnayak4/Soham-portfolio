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
      title: "Cold Message Generator",
      description: "A platform where you can provide the details of the sender and the receiver and set a goal and let the AI write a cold message for you",
      image: "images/project4.png",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "Supabase", "Stripe"],
      demoLink: "https://message-craft-flow.vercel.app/",
      codeLink: "https://github.com/Sohamnayak4/message-craft-flow",
    }
    {
      title: "Task Management System",
      description:
        "A collaborative task management system with real-time updates, user authentication and task filtering system.",
      image: "images/project1.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JWT"],
      demoLink: "https://tasks.sohamnayak.tech",
      codeLink: "https://github.com/Sohamnayak4/Task-Manager-app",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A real-time chat application with user authentication, online status and a nice and responsive UI.",
      image: "images/project2.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Tailwind CSS", "JWT"],
      demoLink: "https://chat.sohamnayak.tech",
      codeLink: "https://github.com/Sohamnayak4/ChatApp",
    },
    {
      title: "FocusTube Landing Page",
      description:
        "A responsive landing page with a nice and modern design for a YouTube productivity SaaS named FocusTube.",
      image: "images/project3.png",
      technologies: ["Next.js", "Tailwind CSS", "Figma", "Framer Motion"],
      demoLink: "https://focustube.sohamnayak.tech",
      codeLink: "https://github.com/Sohamnayak4/saas-landing",
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
