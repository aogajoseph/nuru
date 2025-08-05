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

// === Format links in assistant responses ===
const formatBotMessage = (text) => {
  let formatted = text;

  formatted = formatted.replace(
    /0701\s?777\s?888/g,
    `<a href="https://wa.me/254701777888" target="_blank" style="color:#25D366;text-decoration:none;">0701 777 888 (WhatsApp)</a>`
  );

  formatted = formatted.replace(
    /\(?\+?254\)?\s?0725\s?650\s?737/g,
    `<a href="tel:+254725650737" style="color:#7F00FF;text-decoration:none;">0725 650 737 (Call)</a>`
  );

  formatted = formatted.replace(
    /https:\/\/nairobichapel\.net/g,
    `<a href="https://nairobichapel.net" target="_blank" style="color:#7F00FF;text-decoration:none;">nairobichapel.net</a>`
  );

  return { __html: formatted };
};

// === Smart Greeting Response ===
const getTimeGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const detectGreetingResponse = (userInput) => {
  const normalized = userInput.toLowerCase();
  if (
    normalized.includes("good morning") ||
    normalized.includes("good afternoon") ||
    normalized.includes("good evening")
  ) {
    const correct = getTimeGreeting();
    return `Hey! Thanks for the warm greeting. It’s actually ${correct.toLowerCase()} here, but I’m really glad you dropped by! 😊 How can I help today?`;
  }
  return null;
};

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const chatRef = useRef(null);

  // Load config and inject random intro message
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch("https://nuru-backend-os39.onrender.com/config");
        const data = await res.json();

        setConfig(data); // 🔄 Keep config in state

        const intros = data?.intro_messages || [];
        const randomIntro = intros[Math.floor(Math.random() * intros.length)];

        setMessages([{ sender: "bot", text: randomIntro }]);
      } catch (error) {
        console.error("Failed to load config:", error);
        setMessages([
          {
            sender: "bot",
            text:
              "Hi, I’m Nuru—your digital companion here at Nairobi Chapel Ngong Road. 😊 How can I help today?",
          },
        ]);
      }
    };

    fetchConfig();
  }, []);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    const smartGreeting = detectGreetingResponse(userMessage);
    if (smartGreeting) {
      setMessages((prev) => [...prev, { sender: "bot", text: smartGreeting }]);
      setLoading(false);
      return;
    }

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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "65vh",
        width: { xs: "100%", sm: "70vw", md: "50vw" },
        background: "transparent",
        borderRadius: 3,
        px: 0,
        mb: 0,
        pb: 0,
        flexShrink: 0,
      }}
    >
      <Box sx={{ flexGrow: 1, overflowY: "auto", py: 2, px: 1 }}>
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
                  backgroundColor: msg.sender === "user" ? "#e3f2fd" : "#f5f5f5",
                }}
              >
                {msg.sender === "bot" ? (
                  <Typography
                    variant="body2"
                    fontSize="0.95rem"
                    color="text.primary"
                    dangerouslySetInnerHTML={formatBotMessage(msg.text)}
                  />
                ) : (
                  <Typography
                    variant="body2"
                    fontSize="0.95rem"
                    color="text.primary"
                  >
                    {msg.text}
                  </Typography>
                )}
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
