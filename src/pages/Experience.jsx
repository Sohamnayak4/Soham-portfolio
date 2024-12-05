import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Matiks",
      duration: "June 2024 - July 2024",
      description: "Developed a seamless pagination feature for a React frontend, enhancing performance and user experience across devices. Migrated equivalent features to a Go-based GraphQL server using gqlgen, implementing and testing resolvers for efficient data fetching and mutations while gaining expertise in Node.js and Go server architectures.",
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "IIT Bombay",
      duration: "August 2024 - October 2024",
      description: "Helped teach a class of fifty students the concepts of Business Models and Entrepreneurship, guiding them through case studies and real-world examples to develop a deeper understanding of business strategies and market dynamics.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
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
        Experience
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "800px", marginBottom: "3rem", textAlign: "center" }}
      >
        My professional journey has provided me with valuable hands-on experience in software development and team collaboration. Here are some highlights of my work experience:
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1000px" }}
      >
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                backgroundColor: "#ffffff",
              }}
            >
              <WorkIcon
                sx={{ fontSize: 40, color: "#21517e", marginBottom: 2, alignSelf: "center" }}
              />
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                {exp.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ marginBottom: "0.5rem", color: "#555" }}>
                {exp.company}
              </Typography>
              <Typography variant="subtitle2" sx={{ marginBottom: "1rem", color: "#777" }}>
                {exp.duration}
              </Typography>
              <Typography variant="body2">
                {exp.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
