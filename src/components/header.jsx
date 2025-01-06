import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
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
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
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
            <IconButton
              color="grey"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Soham Nayak
          </Typography>
          <List>
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <ListItem key={item} disablePadding>
                <Link
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    textAlign: "center",
                    color: "#333",
                    textDecoration: "none",
                    width: "100%",
                    padding: "8px 0",
                  }}
                >
                  <ListItemText primary={item} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
