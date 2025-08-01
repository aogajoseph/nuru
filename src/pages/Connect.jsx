import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Paper,
  MenuItem,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const donationMethods = [
  { value: "mpesa", label: "Mpesa", icon: <PhoneAndroidIcon sx={{ fontSize: 18, mr: 1 }} /> },
  { value: "credit", label: "Credit Card", icon: <CreditCardIcon sx={{ fontSize: 18, mr: 1 }} /> },
];

const cardStyles = [
  {
    background: "linear-gradient(135deg, #f3e7ff 0%, #e3f0ff 100%)",
    border: "1.5px solid #d1b3ff",
  },
  {
    background: "linear-gradient(135deg, #e3f0ff 0%, #f3e7ff 100%)",
    border: "1.5px solid #b3d1ff",
  },
  {
    background: "linear-gradient(135deg, #fffbe7 0%, #e7fff3 100%)",
    border: "1.5px solid #ffe7b3",
  },
  {
    background: "linear-gradient(135deg, #e7fff3 0%, #fffbe7 100%)",
    border: "1.5px solid #b3ffe7",
  },
];

const Connect = () => {
  const [donationMethod, setDonationMethod] = useState("mpesa");

  return (
    <Box sx={{ mt: 7, mb: 6, width: "100%", px: { xs: 2, md: 4 } }}>
      {/* Page Title and Subtitle */}
      <Typography
        variant="h5"
        fontWeight={700}
        mb={1}
        color="#333"
        sx={{ fontSize: { xs: 22, md: 26 } }}
      >
        Connect
      </Typography>
      <Typography
        variant="subtitle2"
        color="text.secondary"
        mb={3}
        sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 400 }}
      >
        Get involved by sharing feedback, giving or connecting with us online or in person.
      </Typography>

      {/* Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Left Column */}
        <Box sx={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Feedback */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 3,
              mb: 2,
              ...cardStyles[2],
              boxShadow: "0 2px 12px 0 rgba(90, 100, 120, 0.07)",
            }}
          >
            <Typography variant="h5" fontWeight={700} mb={2} color="#7F00FF">
              Feedback
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Your feedback is anonymous. If you would like a response, kindly include your phone
              number or email in your message. We value your thoughts.
            </Typography>
            <form>
              <Stack spacing={2}>
                <TextField
                  label="Type here..."
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ alignSelf: "flex-end", borderRadius: 2 }}
                >
                  Send
                </Button>
              </Stack>
            </form>
          </Paper>

          {/* Map */}
          <Paper elevation={2} sx={{ overflow: "hidden", borderRadius: 3, mb: 1 }}>
            <iframe
              title="Nairobi Chapel Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.597934944242!2d36.7789!3d-1.3024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f118a8d44b7cd%3A0xc9560d597ff90da2!2sNairobi%20Chapel%20Ngong%20Road!5e0!3m2!1sen!2ske!4v1700000000000"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </Paper>

          {/* Socials */}
          <Box textAlign="center">
            <Typography variant="subtitle1" fontWeight={600} mb={1} sx={{ fontSize: 16 }}>
              Connect
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton
                color="primary"
                href="https://web.facebook.com/NairobiChapel/?_rdc=1&_rdr#"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" href="https://wa.me/254701777888" target="_blank">
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                color="primary"
                href="https://www.youtube.com/channel/UCHFRjuT0oBt6l1vsVnldBJw"
                target="_blank"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton color="primary" href="tel:+254725650737">
                <PhoneIcon />
              </IconButton>
              <IconButton color="primary" href="mailto:info@nairobichapel.org">
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        {/* Right Column */}
        <Box sx={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Giving */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 3,
              mb: 2,
              ...cardStyles[0],
              boxShadow: "0 2px 12px 0 rgba(90, 100, 120, 0.07)",
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={600}
              mb={2}
              sx={{ fontSize: 16, color: "#7F00FF" }}
            >
              Giving
            </Typography>
            <form>
              <Stack spacing={2}>
                <TextField
                  select
                  label="Method"
                  value={donationMethod}
                  onChange={(e) => setDonationMethod(e.target.value)}
                  fullWidth
                  size="small"
                >
                  {donationMethods.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.icon}
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                {donationMethod === "mpesa" && (
                  <TextField label="Phone Number" variant="outlined" fullWidth size="small" />
                )}
                {donationMethod === "credit" && (
                  <>
                    <TextField label="Card Number" variant="outlined" fullWidth size="small" />
                    <Stack direction="row" spacing={2}>
                      <TextField label="Expiry" variant="outlined" size="small" sx={{ flex: 1 }} />
                      <TextField label="CVV" variant="outlined" size="small" sx={{ flex: 1 }} />
                    </Stack>
                    <TextField label="Name on Card" variant="outlined" fullWidth size="small" />
                  </>
                )}
                <TextField label="Amount (KES)" variant="outlined" fullWidth size="small" />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ alignSelf: "flex-end", borderRadius: 2 }}
                >
                  Give
                </Button>
              </Stack>
            </form>
          </Paper>

          {/* Locations */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 3,
              mb: 2,
              ...cardStyles[1],
              boxShadow: "0 2px 12px 0 rgba(90, 100, 120, 0.07)",
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={600}
              mb={0.5}
              sx={{ fontSize: 16, color: "#7F00FF" }}
            >
              Church Location
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Jamuhuri Road off Ngong Road
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              mb={0.5}
              sx={{ fontSize: 16, color: "#7F00FF" }}
            >
              Office Location
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Greenhouse Building, Adams Arcade, Ngong Road. <br />
              West Wing, First Floor (Suite1)
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Connect;
