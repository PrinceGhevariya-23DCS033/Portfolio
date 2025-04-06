import { Box, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'PHP', level: 85 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Mongoose', level: 80 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'MongoDB Atlas', level: 80 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'Netlify', level: 85 },
      { name: 'Vercel', level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        bgcolor: 'background.paper',
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
            Technical Skills
          </Typography>
          <Grid container spacing={4}>
            {skills.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 3, fontWeight: 'bold' }}
                    >
                      {category.category}
                    </Typography>
                    {category.items.map((skill, skillIndex) => (
                      <Box key={skillIndex} sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1,
                          }}
                        >
                          <Typography variant="body1">{skill.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            bgcolor: 'primary.light',
                            '& .MuiLinearProgress-bar': {
                              bgcolor: 'primary.main',
                            },
                          }}
                        />
                      </Box>
                    ))}
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

export default Skills; 