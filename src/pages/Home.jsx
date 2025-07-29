// File: /src/pages/Home.jsx

import React from "react";
import { Box, Typography } from "@mui/material";
import ChatBox from "../components/ChatBox";

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
          Hi, My name is Nuru.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ask me anything about Nairobi Chapel Ngong’ Road. I’ll keep you informed and connected.
        </Typography>
      </Box>

      {/* Chat box */}
      <Box display="flex" justifyContent="center" width="100%" flexShrink={0}>
        <ChatBox />
      </Box>
    </Box>
  );
};

export default Home;
