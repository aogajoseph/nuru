import React, { useEffect, useState } from "react";
import { Box, Typography, Button, List, ListItem, ListItemText, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const bulletPoints = [
  "I answer your questions about Nairobi Chapel Ngong Road.",
  "I help you find service times and get oriented confidently.",
  "I guide newcomers on what to expect during Sunday visits.",
  "I'm always respectful, friendly, and Scripture-conscious.",
  "I’m always available for you 24 hours a day, 7 days a week.",
];

const IntroSlideOne = ({ onNext, onSkip }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < bulletPoints.length) {
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
        Hi, I’m Nuru.
      </Typography>

      <Typography
        variant="body1"
        fontSize="1.1rem"
        color="text.secondary"
        mb={4}
        maxWidth="600px"
      >
        Your friendly digital companion at <strong>Nairobi Chapel Ngong Road.</strong>
      </Typography>

      <List sx={{ textAlign: "center" }}>
        {bulletPoints.slice(0, visibleCount).map((point, idx) => (
          <ListItem
            key={idx}
            sx={{
              justifyContent: "center",
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
            <CheckCircleIcon sx={{ mr: 1, color: "#6A5ACD" }} />
            <ListItemText primary={point} />
          </ListItem>
        ))}
      </List>

      <Stack direction="row" spacing={2} mt={6}>
        <Button
          variant="outlined"
          onClick={onSkip}
          sx={{
            borderRadius: 20,
            px: 4,
            color: "#6A5ACD",
            borderColor: "#6A5ACD",
            fontWeight: 500,
          }}
        >
          Skip
        </Button>

        <Button
          variant="contained"
          onClick={onNext}
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
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default IntroSlideOne;
