import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const sectionPoints = [
  "📢 Notices – Stay updated with announcements and news.",
  "🎧 Sermons – Catch up on messages and teachings.",
  "🤝 Ministries – Discover places to serve and grow.",
  "📅 Events – Find out what’s happening and join in.",
  "💬 Connect – Reach out or get involved easily.",
];

const IntroSlideTwo = ({ onBack, onDone }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < sectionPoints.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        textAlign: "center",
        backgroundColor: "#f5f6fa",
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="#7F00FF" gutterBottom>
        There’s More to Explore
      </Typography>

      <Typography
        variant="body1"
        fontSize="1.1rem"
        color="text.secondary"
        mb={4}
        maxWidth="600px"
      >
        Beyond chat, Nuru helps you navigate all of{" "}
        <strong>Nairobi Chapel Ngong Road</strong>.
      </Typography>

      <Stack spacing={2} mb={4} alignItems="center">
        {sectionPoints.slice(0, visibleCount).map((text, idx) => (
          <Typography
            key={idx}
            fontSize="1rem"
            sx={{
              opacity: 0,
              animation: "fadeSlideIn 0.9s ease forwards",
              animationDelay: `${idx * 0.2}s`,
              "@keyframes fadeSlideIn": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(10px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            {text}
          </Typography>
        ))}
      </Stack>

      <Stack direction="row" spacing={2} mt={6}>
        <Button
          variant="outlined"
          onClick={onBack}
          sx={{
            borderRadius: 20,
            px: 4,
            color: "#6A5ACD",
            borderColor: "#6A5ACD",
            fontWeight: 500,
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={onDone}
          sx={{
            backgroundColor: "#6A5ACD",
            borderRadius: 20,
            px: 5,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#5a4fcf",
            },
          }}
        >
          Let’s Go →
        </Button>
      </Stack>
    </Box>
  );
};

export default IntroSlideTwo;
