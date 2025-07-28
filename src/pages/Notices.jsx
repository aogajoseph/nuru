import React from "react";
import { Box, Typography } from "@mui/material";
import NoticesCard from "../components/NoticesCard";

const notices = [
  {
    title: "Main Service",
    subtitle: "Every Sunday",
    description: "Join us in the Hyperdome (Main Tent) at 9:00am and 11:30am for worship and fellowship.",
    category: "Worship",
  },
  {
    title: "Children and Teens",
    subtitle: "Sunday Service",
    description: "All children and teens are welcome in the for Sunday School at 9:00am and 11:30am.",
    category: "Worship",
  },
  {
    title: "Young Adults",
    subtitle: "Sunday Service",
    description: "All young adults are warmly welcome in the XP tent for worship and fellowship at 11:30am",
    category: "Worship",
  },
  {
    title: "Prayer Meeting",
    subtitle: "Wednesdays",
    description: "Join us in the Hyperdome (Main tent) from 6.00pm to 7:30pm for prayers. All are invited.",
    category: "Prayer",
  },
  {
    title: "Weekly Prayer Meetings",
    subtitle: "Weekdays",
    description: "Join us from 5:00am to 6:00am on Zoom. Use the link below.",
    category: "Prayer",
    buttonLabel: "Zoom Link",
  },
];

const Notices = () => (
  <Box sx={{ mt: 7, mb: 6, width: '100%', px: { xs: 2, md: 4 } }}>
    <Typography variant="h5" fontWeight={700} mb={1} color="#333" sx={{ fontSize: { xs: 22, md: 26 } }}>
      Notices
    </Typography>
    <Typography variant="subtitle2" color="text.secondary" mb={3} sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 400 }}>
      Stay up to date with the latest church news and important announcements.
    </Typography>
    {notices.length === 0 ? (
      <Typography variant="body2" color="text.secondary">
        Nothing at the moment
      </Typography>
    ) : (
      <Box display="flex" flexWrap="wrap" gap={2}>
        {notices.map((notice, idx) => (
          <NoticesCard key={idx} {...notice} idx={idx} />
        ))}
      </Box>
    )}
  </Box>
);

export default Notices;
