import React, { useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";

const ChatBox = () => {
  const [messages, setMessages] = useState([
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://nuru-backend-os39.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.response }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I couldn’t connect to the assistant. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "65vh",
        width: { xs: '100%', sm: '70vw', md: '50vw' },
        background: "transparent",
        borderRadius: 3,
        px: 0,
        mb: 0,
        pb: 0,
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          py: 2,
          px: 1,
        }}
      >
        <Stack spacing={2}>
          {messages.map((msg, idx) => (
            <Box
              key={idx}
              alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}
              maxWidth="80%"
            >
              <Paper
                elevation={0}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  backgroundColor:
                    msg.sender === "user" ? "#e3f2fd" : "#f5f5f5",
                }}
              >
                <Typography
                  variant="body2"
                  fontSize="0.95rem"
                  color="text.primary"
                >
                  {msg.text}
                </Typography>
              </Paper>
            </Box>
          ))}
          {loading && (
            <Box alignSelf="flex-start">
              <CircularProgress size={20} />
            </Box>
          )}
          <div ref={chatRef} />
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          mt: "auto",
          pb: 0,
          pt: 1,
          backgroundColor: "#fff",
        }}
      >
        <TextField
          id="assistant-input"
          placeholder="Ask here..."
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={loading}
          sx={{
            borderRadius: "30px",
            backgroundColor: "#f9f9f9",
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              fontSize: "0.95rem",
              "&::placeholder": {
                color: "#aaa",
                fontStyle: "italic",
              },
            },
          }}
        />

        <IconButton
          onClick={handleSend}
          disabled={loading}
          sx={{
            ml: 1,
            backgroundColor: "#6A5ACD",
            color: "#fff",
            borderRadius: "70%",
            "&:hover": {
              backgroundColor: "#5a4fcf",
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBox;
