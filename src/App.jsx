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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
      fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4.5rem' },
      lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
    },
    h2: {
      fontWeight: 600,
      fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
      lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
    },
    h3: {
      fontWeight: 600,
      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.5rem' },
      lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
    },
    h4: {
      fontWeight: 500,
      fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
      lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
    },
    body1: {
      fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' },
      lineHeight: { xs: 1.5, sm: 1.6, md: 1.7, lg: 1.8 },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: { xs: '0 16px', sm: '0 24px', md: '0 32px' },
          maxWidth: { xs: '100%', sm: '600px', md: '900px', lg: '1200px' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: { xs: 8, sm: 10, md: 12 },
          padding: { xs: '16px', sm: '20px', md: '24px', lg: '32px' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: { xs: 6, sm: 8 },
          textTransform: 'none',
          fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' },
          padding: { 
            xs: '6px 12px', 
            sm: '8px 16px', 
            md: '10px 20px', 
            lg: '12px 24px' 
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          margin: { xs: '-8px', sm: '-16px', md: '-24px' },
          width: { xs: 'calc(100% + 16px)', sm: 'calc(100% + 32px)', md: 'calc(100% + 48px)' },
        },
        item: {
          padding: { xs: '8px', sm: '16px', md: '24px' },
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
        <Box 
          component="main" 
          sx={{ 
            flex: 1,
            pt: { xs: 8, sm: 9, md: 10 },
          }}
        >
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
