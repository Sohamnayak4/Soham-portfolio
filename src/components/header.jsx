import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Container,
} from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem 0",
          }}
        >
          <Typography variant="h6" component="div">
            <Link
              href="#home"
              sx={{ color: "#333", textDecoration: "none", fontWeight: "bold" }}
            >
              Soham Nayak
            </Link>
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: "#333",
                  textDecoration: "none",
                  fontWeight: "medium",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "underline",
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
