import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const sections = [
  { name: 'HOME', id: 'hero' },
  { name: 'ABOUT', id: 'about' },
  { name: 'EXPERIENCE', id: 'experience' },
  { name: 'EDUCATION', id: 'education' },
  { name: 'SKILLS', id: 'skills' },
  { name: 'CONTACT', id: 'contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionElements = sections.map(section => ({
        id: section.id,
        offset: document.getElementById(section.id)?.offsetTop - 100
      }));

      const currentPosition = window.scrollY;
      const activeSection = sectionElements.reduce((acc, section) => {
        if (section.offset <= currentPosition) {
          return section.id;
        }
        return acc;
      }, 'hero');

      setActiveSection(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? 'rgba(33, 150, 243, 0.95)' : 'transparent',
          transition: 'all 0.5s ease',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
          borderBottom: scrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component={ScrollLink}
                to="hero"
                smooth={true}
                duration={500}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', md: '1.8rem' },
                  background: 'linear-gradient(45deg, #2196f3, #21CBF3)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                PG
              </Typography>
            </motion.div>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    component={ScrollLink}
                    to={section.id}
                    smooth={true}
                    duration={500}
                    sx={{
                      color: 'white',
                      px: 2,
                      py: 1,
                      fontWeight: activeSection === section.id ? 700 : 500,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'white',
                        transform: activeSection === section.id ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.3s ease',
                        transformOrigin: 'left',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '&::before': {
                          transform: 'scaleX(1)',
                        },
                      },
                    }}
                  >
                    {section.name}
                  </Button>
                </motion.div>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: 240,
                background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)',
                color: 'white',
                boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <List sx={{ pt: 8 }}>
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ListItem
                    button
                    component={ScrollLink}
                    to={section.id}
                    smooth={true}
                    duration={500}
                    onClick={handleDrawerToggle}
                    sx={{
                      my: 1,
                      mx: 2,
                      borderRadius: 1,
                      transition: 'all 0.3s ease',
                      backgroundColor: activeSection === section.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={section.name}
                      sx={{
                        textAlign: 'center',
                        '& .MuiTypography-root': {
                          fontWeight: activeSection === section.id ? 700 : 500,
                        },
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 