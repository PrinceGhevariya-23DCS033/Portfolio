import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: ['0vh', '100vh'],
              x: [Math.random() * 100 + 'vw', Math.random() * 100 + 'vw'],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </Box>

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    background: 'linear-gradient(45deg, #FFFFFF 30%, #E3F2FD 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: '60px',
                      height: '4px',
                      background: 'white',
                      borderRadius: '2px',
                    },
                  }}
                >
                  Prince Ghevariya
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  MERN Stack Developer
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 4,
                    maxWidth: '600px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                >
                  Passionate about building web applications and solving complex problems.
                  Let's create something amazing together!
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  {[
                    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/prince-ghevariya-9614b128b" },
                    { icon: <FaEnvelope />, href: "mailto:princeghevariya2030@gmail.com" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      <IconButton
                        component="a"
                        href={item.href}
                        target="_blank"
                        sx={{
                          color: 'white',
                          fontSize: '1.5rem',
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(5px)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.2)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {item.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ marginTop: '-20px' }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#contact"
                  sx={{
                    py: { xs: 1, sm: 1.25, md: 1.5 },
                    px: { xs: 2, sm: 3, md: 4 },
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    fontWeight: 'bold',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              style={{ position: 'relative' }}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                mr: { md: 2 },
                width: 'fit-content'
              }}
            >
              <Box
                component="img"
                src="/Profile.jpg"
                alt="Prince Ghevariya"
                sx={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  border: '4px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.5s ease',
                  filter: 'brightness(1.05) contrast(1.05)',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 30px 50px rgba(0,0,0,0.35)',
                    border: '4px solid rgba(255,255,255,0.4)',
                  },
                  position: 'relative',
                  zIndex: 2,
                  '@media (max-width: 900px)': {
                    width: '200px',
                    height: '200px',
                    marginTop: 0,
                    marginBottom: 4,
                  },
                }}
              />
              {/* Decorative ring around the image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                  border: '2px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(5px)',
                  zIndex: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -2,
                    left: -2,
                    right: -2,
                    bottom: -2,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
                    filter: 'blur(10px)',
                  },
                  '@media (max-width: 900px)': {
                    width: '220px',
                    height: '220px',
                  },
                }}
              />
              {/* Additional decorative ring */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(15deg)',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(255,255,255,0.2)',
                  zIndex: 0,
                  '@media (max-width: 900px)': {
                    width: '240px',
                    height: '240px',
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 