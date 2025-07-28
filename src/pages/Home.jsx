// File: /src/pages/Home.jsx

import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import ChatBox from "../components/ChatBox";

const suggestions = [
  "What time is the Sunday service?",
  "Does the church have a vision?",
  "Do you have youth programs?",
  "How can I volunteer?",
];

const Home = () => {
  return (
    <Box sx={{
      width: '100%',
      px: { xs: 2, md: 4 },
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '64px', // offset for header height
    }}>
      {/* Header */}
      <Box textAlign="center" mt={0} mb={1} px={2}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Hi there! I'm your Chapel Digital Assistant
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ask me anything about Nairobi Chapel Ngong’ Road. I’m here to keep you informed and connected.
        </Typography>
      </Box>

      {/* Suggestions */}
      <Box mb={3} textAlign="center">
        <Typography variant="subtitle2" color="text.secondary" mb={1}>
          Try asking:
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ rowGap: 1.5 }}>
          {suggestions.map((text) => (
            <Chip
              key={text}
              label={text}
              variant="outlined"
              color="primary"
              clickable
              sx={{
                borderRadius: "16px",
                fontWeight: 500,
                fontSize: "0.85rem",
                // Removed mb
              }}
              onClick={() => {
                const input = document.getElementById("assistant-input");
                if (input) {
                  input.value = text;
                  input.focus();
                }
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Chat box */}
      <Box display="flex" justifyContent="center" width="100%" flexShrink={0}>
        <ChatBox />
      </Box>
    </Box>
  );
};

export default Home;
