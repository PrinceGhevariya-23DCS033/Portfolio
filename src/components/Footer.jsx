import { Box, Container, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'primary.main',
        color: 'white',
        background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 2,
                mb: 2 
              }}
            >
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/prince-ghevariya-9614b128b" },
                { icon: <FaEnvelope />, href: "mailto:princeghevariya2030@gmail.com" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      fontSize: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(5px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
            
            <Box sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Typography 
                  variant="body1" 
                  sx={{
                    fontWeight: 500,
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    mb: 1
                  }}
                >
                  © {new Date().getFullYear()} Prince Ghevariya
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Typography 
                  variant="body2" 
                  sx={{
                    opacity: 0.9,
                    letterSpacing: '0.5px',
                    '& span': {
                      color: '#ff4081',
                      animation: 'pulse 1.5s infinite',
                    },
                    '@keyframes pulse': {
                      '0%': { opacity: 1 },
                      '50%': { opacity: 0.6 },
                      '100%': { opacity: 1 },
                    },
                  }}
                >
                  Built with <span>❤️</span> using React and Material-UI
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 