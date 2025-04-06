import SchoolIcon from "@mui/icons-material/School";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const education = [
  {
    degree: "B.Tech in CSE",
    institution: "Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    university: "Charotar University of Science and Technology (CHARUSAT)",
    year: "2023-2027",
    details: "Current CGPA: 9.03",
  },
  {
    degree: "HSC",
    institution: "Ashadeep Group of Schools",
    year: "2023",
    details: "",
  },
  {
    degree: "SSC",
    institution: "Ramkrishana Vidhyabhavan",
    year: "",
    details: "",
  },
];

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        py: 8,
        bgcolor: "background.default",
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
              textAlign: "center",
              mb: 6,
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Education
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Timeline>
                  {education.map((edu, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <SchoolIcon />
                        </TimelineDot>
                        {index !== education.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" sx={{ mb: 0.5 }}>
                          {edu.institution}
                        </Typography>
                        {edu.university && (
                          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {edu.university}
                          </Typography>
                        )}
                        <Typography variant="body2" color="text.secondary">
                          {edu.year}
                        </Typography>
                        {edu.details && (
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            {edu.details}
                          </Typography>
                        )}
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 