import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        color: "white",
        textAlign: "center",
        backgroundColor: "primary.main",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          © 2023 Your Company. All rights reserved.
        </Typography>
        <Box>
          <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          |
          <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
