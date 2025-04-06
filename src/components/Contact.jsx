import emailjs from '@emailjs/browser';
import { Box, Button, Container, Grid, Paper, Snackbar, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

// EmailJS Configuration
const SERVICE_ID = 'service_xrn5evr';
const TEMPLATE_ID = 'template_aek0veb';
const PUBLIC_KEY = 'ZvbWvIgZWz1b4pgOY';

const Contact = () => {
  const form = useRef();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [loading, setLoading] = useState(false);
  const [emailjsInitialized, setEmailjsInitialized] = useState(false);

  useEffect(() => {
    const initEmailJS = async () => {
      try {
        await emailjs.init(PUBLIC_KEY);
        setEmailjsInitialized(true);
      } catch (error) {
        console.error('EmailJS initialization error:', error);
        setSnackbar({
          open: true,
          message: 'Error initializing contact form. Please try again later.',
          severity: 'error'
        });
      }
    };

    initEmailJS();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailjsInitialized) {
      setSnackbar({
        open: true,
        message: 'Contact form is not ready yet. Please try again later.',
        severity: 'error'
      });
      return;
    }

    setLoading(true);
    
    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setSnackbar({
          open: true,
          message: 'Message sent successfully! I will get back to you soon.',
          severity: 'success'
        });
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      let errorMessage = 'Failed to send message. Please try again or email me directly.';
      
      if (error.message.includes('412')) {
        errorMessage = 'Gmail authentication error. Please check your EmailJS Gmail service configuration.';
      } else if (error.message.includes('insufficient')) {
        errorMessage = 'Gmail API permissions are insufficient. Please reconnect your Gmail service in EmailJS dashboard.';
      }
      
      setSnackbar({
        open: true,
        message: errorMessage,
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 3, sm: 4, md: 8 },
        px: { xs: 2, md: 0 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 2, sm: 3, md: 6 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
              fontWeight: 'bold',
              color: 'text.primary',
            }}
          >
            Get In Touch
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8} lg={6}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: { xs: 2, sm: 3, md: 4 },
                  background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                  borderRadius: 2,
                  width: '100%',
                  mb: { xs: 2, sm: 3, md: 4 },
                }}
              >
                <form ref={form} onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="from_name"
                    margin="normal"
                    required
                    sx={{ 
                      mb: { xs: 1.5, sm: 2 },
                      '& .MuiInputBase-root': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="reply_to"
                    type="email"
                    margin="normal"
                    required
                    sx={{ 
                      mb: { xs: 1.5, sm: 2 },
                      '& .MuiInputBase-root': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    margin="normal"
                    required
                    sx={{ 
                      mb: { xs: 2, sm: 3 },
                      '& .MuiInputBase-root': {
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={loading}
                    sx={{
                      py: { xs: 1, sm: 1.25, md: 1.5 },
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                      fontWeight: 'bold',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      mt: { xs: -1, sm: 0 },
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default Contact;