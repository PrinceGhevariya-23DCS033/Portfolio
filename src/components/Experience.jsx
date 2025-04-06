import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const projects = [
  {
    title: 'CharusatmedicareX',
    role: 'MERN Stack Developer',
    duration: 'Jan 2024 - Present',
    description: [
      'Developed a comprehensive Healthcare Management System with role-based access control for doctors, patients, and counselors.',
      'Implemented secure JWT authentication and role-based authorization to ensure data privacy and security.',
      'Built a responsive frontend using React and Tailwind CSS with modern UI/UX principles.',
      'Designed and implemented RESTful APIs using Node.js and Express.js for efficient data handling.',
      'Integrated MongoDB for scalable data storage and implemented efficient querying patterns.',
      'Added real-time appointment scheduling and notification system using Socket.io.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Socket.io']
  },
  {
    title: 'Yuva Hostel Management',
    role: 'Backend Developer',
    duration: 'Oct 2023 - Dec 2023',
    description: [
      'Designed and developed a complete Hostel Management System backend using PHP and MySQL.',
      'Implemented features for room allocation, tenant management, and payment tracking.',
      'Created RESTful API endpoints for efficient data management and real-time updates.',
      'Developed an automated billing system for monthly rent collection and expense tracking.',
      'Implemented a complaint management system with real-time status updates.',
      'Added a dashboard for administrators to monitor occupancy rates and payment status.',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'jQuery']
  },
  {
    title: 'Real-Time Chat Application',
    role: 'Full Stack Developer',
    duration: 'Aug 2023 - Sep 2023',
    description: [
      'Built a secure real-time chat application using Python Flask and React.',
      'Created a responsive UI with real-time message updates using WebSocket.',
      'Added features like user authentication, group chats, and file sharing.',
      'Implemented message persistence using MongoDB for chat history.',
      'Added typing indicators and online/offline status features.',
      'Optimized performance for handling multiple concurrent chat sessions.',
    ],
    technologies: ['Python', 'Flask', 'React', 'MongoDB', 'WebSocket']
  }
];

const Experience = () => {
  return (
    <Box
      id="experience"
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
            Projects & Experience
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                      borderRadius: 2,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
                        {project.role} | {project.duration}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <ul style={{ paddingLeft: '20px', margin: '0' }}>
                          {project.description.map((point, i) => (
                            <li key={i}>
                              <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
                                {point}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            '&:hover': {
                              bgcolor: 'primary.dark',
                            },
                          }}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience; 