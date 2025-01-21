import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
      return (
            <Box
                  component="footer"
                  sx={{
                        backgroundColor: (theme) =>
                              theme.palette.mode === 'light'
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[800],
                        p: 6,
                        position: 'absolute',
                        width: '100%',

                        bottom: 0
                  }}
            >
                  <Container maxWidth="lg">
                        <Typography variant="body1" align="center" color="textSecondary">
                              © {new Date().getFullYear()} Your Company Name
                        </Typography>
                        <Typography variant="body2" align="center" color="textSecondary">
                              All rights reserved.
                        </Typography>
                  </Container>
            </Box>
      );
};

export default Footer;