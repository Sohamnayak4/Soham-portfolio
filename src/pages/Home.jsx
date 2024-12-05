import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: { xs: "center", md: "left" } }}
            >
              Soham Nayak
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{ marginBottom: "1rem", textAlign: { xs: "center", md: "left" } }}
            >
              Full-Stack Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "2rem", textAlign: { xs: "center", md: "left" } }}
            >
              Welcome to my portfolio! I'm a passionate full-stack developer with experience in the MERN stack, Next.js, Material UI and Golang. I love building web applications that are fast, responsive, and user-friendly.
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Button variant="contained" color="primary" href="#projects">
                View Projects
              </Button>
              <Button variant="outlined" color="primary" href="#contact">
                Contact Me
              </Button>
            </Box>
          </Box>
          <Box
            component="img"
            src="/src/assets/images/IMG20240704165324.jpg"
            alt="Soham Nayak"
            sx={{
              width: "100%",
              maxWidth: { xs: "300px", md: "400px" },
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
