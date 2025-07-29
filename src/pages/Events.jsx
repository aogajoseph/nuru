// File: /src/pages/Events.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import EventsCard from "../components/EventsCard";

const upcomingEvents = [
  {
    title: "Annual Youth Camp",
    subtitle: "Mt. Kenya Forest",
    image: "https://nairobichapel.net/wp-content/uploads/2016/01/win1.jpg",
    date: "Aug 12-16, 2024",
    description: "A week of adventure, worship, and friendship in the wild! Register now for an unforgettable experience.",
  },
  {
    title: "Charity Fundraiser Dinner",
    subtitle: "Nairobi Serena Hotel",
    image: "https://nairobichapel.net/wp-content/uploads/2015/07/XP-DICE-Dance-group-1.png",
    date: "Sep 7, 2024",
    description: "Join us for an elegant evening to support our community outreach programs. Tickets available online.",
  },
];

const pastEvents = [
  {
    title: "Family Fun Day & Picnic",
    subtitle: "Uhuru Gardens",
    image: "https://nairobichapel.net/wp-content/uploads/2015/07/image8.jpg",
    date: "May 18, 2024",
    description: "Games, food, and fun for all ages! Thank you for making it a memorable day.",
  },
  {
    title: "Men’s Football Tournament",
    subtitle: "Nairobi Sports Grounds",
    image: "https://nairobichapel.net/wp-content/uploads/2015/07/Chapel-2006-1024x683.jpg",
    date: "Apr 13, 2024",
    description: "Congratulations to all teams for great sportsmanship and fellowship!",
  },
  {
    title: "Ladies’ Hiking Retreat",
    subtitle: "Ngong Hills",
    image: "https://nairobichapel.net/wp-content/uploads/2015/07/Chapel-2015-1024x683.jpg",
    date: "Mar 2, 2024",
    description: "A day of adventure, prayer, and connection in nature.",
  },
  {
    title: "Teens’ Movie Night",
    subtitle: "Chapel Hall",
    image: "https://nairobichapel.net/wp-content/uploads/2015/07/egroup2.png",
    date: "Feb 10, 2024",
    description: "A fun night of movies, snacks, and new friendships!",
  },
];

const Events = () => (
  <Box sx={{ mt: 7, mb: 6, width: '100%', px: { xs: 2, md: 4 } }}>
    <Typography variant="h5" fontWeight={700} mb={1} color="#333" sx={{ fontSize: { xs: 22, md: 26 } }}>
      Events
    </Typography>
    <Typography variant="subtitle2" color="text.secondary" mb={3} sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 400 }}>
      Explore our memorable encounters — camps, fundraisers, tournaments and more.
    </Typography>
    <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ fontSize: { xs: 16, md: 18 }, color: '#7F00FF' }}>
      Upcoming Events
    </Typography>
    {upcomingEvents.length === 0 ? (
      <Typography variant="body2" color="text.secondary" mb={4}>
        Nothing at the moment
      </Typography>
    ) : (
      <Box display="flex" flexWrap="wrap" gap={3} mb={4}>
        {upcomingEvents.map((event, idx) => (
          <Box key={idx} sx={{ flex: '1 1 260px', maxWidth: 500, minWidth: 260, display: 'flex' }}>
            <EventsCard {...event} idx={idx} />
          </Box>
        ))}
      </Box>
    )}
    <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ fontSize: { xs: 16, md: 18 }, color: '#7F00FF' }}>
      Past Events
    </Typography>
    {pastEvents.length === 0 ? (
      <Typography variant="body2" color="text.secondary">
        Nothing at the moment
      </Typography>
    ) : (
      <Box display="flex" flexWrap="wrap" gap={3}>
        {pastEvents.map((event, idx) => (
          <Box key={idx} sx={{ flex: '1 1 260px', maxWidth: 500, minWidth: 260, display: 'flex' }}>
            <EventsCard {...event} idx={idx + 10} />
          </Box>
        ))}
      </Box>
    )}
  </Box>
);

export default Events;
