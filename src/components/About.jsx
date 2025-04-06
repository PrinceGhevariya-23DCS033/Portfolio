import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            About Me
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    color: 'primary.main',
                    textAlign: 'left',
                  }}
                >
                  Hello! I'm Prince Ghevariya
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    mb: 2,
                  }}
                >
                  A passionate MERN Stack Developer currently pursuing B.Tech in Computer Science and Engineering at Devang Patel Institute of Advance Technology and Research (DEPSTAR), Charotar University of Science and Technology (CHARUSAT) with a strong CGPA of 9.03. I specialize in building modern web applications that combine functionality with exceptional user experiences.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    mb: 2,
                  }}
                >
                  With a deep understanding of both frontend and backend technologies, I've successfully delivered multiple projects ranging from healthcare management systems to real-time chat applications. My expertise includes building responsive interfaces with React.js, developing robust backend systems with Node.js and Express.js, and working with MongoDB for efficient data management.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                  }}
                >
                  I'm constantly learning and staying updated with the latest technologies, always eager to take on new challenges and contribute to innovative solutions.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}
                >
                  Technical Expertise
                </Typography>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {[
                    'MERN Stack Development',
                    'RESTful API Design',
                    'Database Management',
                    'UI/UX Design',
                    'Version Control (Git)',
                    'Responsive Web Design',
                    'API Integration',
                    'Performance Optimization',
                  ].map((skill, index) => (
                    <Grid item xs={6} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: 'primary.main',
                            borderRadius: '50%',
                            mr: 1,
                          }}
                        />
                        <Typography variant="body2">{skill}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Typography
                  variant="h6"
                  sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}
                >
                  Soft Skills
                </Typography>
                <Grid container spacing={2}>
                  {[
                    'Problem-Solving',
                    'Team Collaboration',
                    'Time Management',
                    'Communication',
                    'Critical Thinking',
                    'Adaptability',
                    'Project Management',
                    'Attention to Detail',
                  ].map((skill, index) => (
                    <Grid item xs={6} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: 'primary.main',
                            borderRadius: '50%',
                            mr: 1,
                          }}
                        />
                        <Typography variant="body2">{skill}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 