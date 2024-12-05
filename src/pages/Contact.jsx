import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "2rem",
        paddingBottom: "4rem",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }} 
        >
          Contact Me
        </Typography>
        <Grid container spacing={4} justifyContent="center"> 
          <Grid item xs={12} md={10}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}> 
              <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "0.1rem" }}> 
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <EmailIcon color="primary" sx={{ fontSize: 24 }} /> 
                    <Typography variant="body1">sohamnayak04@gmail.com</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <PhoneIcon color="primary" sx={{ fontSize: 24 }} /> 
                    <Typography variant="body1">+91 8591355496</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <LocationOnIcon color="primary" sx={{ fontSize: 24 }} /> 
                    <Typography variant="body1">Hostel 6, IIT Bombay, Mumbai, India</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 4, marginTop: "1rem" }}> 
                <Link href="https://www.linkedin.com/in/soham-nayak-527bb7313/" target="_blank" rel="noopener noreferrer" sx={{ color: "inherit", textDecoration: "none" }}>
                  <LinkedInIcon color="primary" sx={{ fontSize: 36 }} /> 
                </Link>
                <Link href="https://github.com/sohamnayak4" target="_blank" rel="noopener noreferrer" sx={{ color: "inherit", textDecoration: "none" }}>
                  <GitHubIcon color="primary" sx={{ fontSize: 36 }} />
                </Link>
                <Link href="https://x.com/soham_nayak04" target="_blank" rel="noopener noreferrer" sx={{ color: "inherit", textDecoration: "none" }}>
                  <TwitterIcon color="primary" sx={{ fontSize: 36 }} /> 
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
