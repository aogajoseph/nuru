// File: /src/pages/Sermons.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import SermonsCard from "../components/SermonsCard";

const sermons = [
  {
    title: "The Commission",
    videoUrl: "https://www.youtube.com/embed/idCfP_ScsLc?si=EUAMYqfLOvZSPFvA",
    description: "If Jesus was to establish a government today, what would it look like? Think about that.",
    preacher: "Pastor Cosma Gatere",
    date: "Jul 27, 2025",
  },
  {
    title: "The Connections",
    videoUrl: "https://www.youtube.com/embed/QApLqL1rx8Q?si=S0Leaxk05g6l8Bfq",
    description: "The connections of Kingdom citizens and how they impact the world.",
    preacher: "Pastor Cosma Gatere",
    date: "Jul 20, 2025",
  },
  {
    title: "The Culture",
    videoUrl: "https://www.youtube.com/embed/BrDfdG8mg3c",
    description: "What habits, practices and cultures are you passing on to the next generation?",
    preacher: "Pastor Cosma Gatere",
    date: "Jul 13, 2025",
  },
  {
    title: "The Calling",
    videoUrl: "https://www.youtube.com/embed/yGcXBVDGp2w",
    description: "The calling of Jesus Christ to humanity was purposely to teach about the Kingdom of God.",
    preacher: "Pastor Cosma Gatere",
    date: "Jul 6, 2025",
  },
  {
    title: "Silent Prayer",
    videoUrl: "https://www.youtube.com/embed/FIhAwgtQ7-Q",
    description: "Discover the power of connecting silently with our heavenly father.",
    preacher: "Bishop Oscar Muriu",
    date: "Jun 22, 2025",
  },
  {
    title: "Prayer Rhythms",
    videoUrl: "https://www.youtube.com/embed/ZEudbr1KVOc",
    description: "Discover the daily Prayer Rhythms that anchor your faith and nourish your spirit.",
    preacher: "Bishop Oscar Muriu",
    date: "Jul 15, 2025",
  },
];

const Sermons = () => (
  <Box sx={{ mt: 7, mb: 6, width: '100%', px: { xs: 2, md: 4 } }}>
    <Typography variant="h5" fontWeight={700} mb={1} color="#333" sx={{ fontSize: { xs: 22, md: 26 } }}>
      Sermons
    </Typography>
    <Typography variant="subtitle2" color="text.secondary" mb={3} sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 400 }}>
      Our messages are crafted to encourage, challenge and deepen your walk with Christ.
    </Typography>
    {sermons.length === 0 ? (
      <Typography variant="body2" color="text.secondary">
        Nothing at the moment
      </Typography>
    ) : (
      <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
        {sermons.map((sermon, idx) => (
          <Box key={idx} sx={{ flex: '1 1 320px', maxWidth: 345, minWidth: 260, display: 'flex' }}>
            <SermonsCard {...sermon} idx={idx} />
          </Box>
        ))}
      </Box>
    )}
  </Box>
);

export default Sermons;
