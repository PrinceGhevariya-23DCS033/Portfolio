import { Box, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
    },
    h2: {
      fontWeight: 600,
      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
    },
    h3: {
      fontWeight: 600,
      fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
    },
    body1: {
      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
      lineHeight: 1.8,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: { xs: '0 16px', sm: '0 24px', md: '0 32px' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: { xs: '16px', sm: '24px', md: '32px' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
          padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
        }}
      >
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
