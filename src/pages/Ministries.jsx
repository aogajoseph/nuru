// File: /src/pages/Ministries.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import MinistriesCard from "../components/MinistriesCard";
import FrontlineMinistryCard from "../components/FrontlineMinistryCard";
import safeFamiliesImg from '../assets/safe-families.png';
import tumainiClinicsImg from '../assets/tumaini-clinics.png';
import jabariImg from '../assets/jabari.png';
import bintiImg from '../assets/binti.png';

const ministries = [
  {
    title: "Quest",
    subheader: "Ages 3-12",
    image: "https://nairobichapel.net/wp-content/uploads/2015/07/NY1A1171-1024x683.jpg",
    description: "Train a child in the way He should go, and when he is old he will not turn from it (Proverbs 22:6).",
    details: "QUEST, our Children’s Ministry, embodies the great adventure of knowing God, discovering His Word and enjoying His people. Here, we seek to draw the young ones into a closer walk with Jesus and to empower them to reveal His love to others along the way.",
  },
  {
    title: "Teens Church",
    subheader: "Ages 13-19",
    image: "https://nairobichapel.net/wp-content/uploads/2015/07/youth-church.png",
    description: "The Teens Church nurtures, inspires and empowers young adults in the ways of Jesus Christ.",
    details: `Also known as Club Xpressions, or XP, our Teens’ Church has various Programs designed to nurture, inspire, empower and holistically grow young adults in the ways of the Lord Jesus Christ. <a href="https://nairobichapel.net/teens-church/" target="_blank" rel="noopener noreferrer">Click here to learn more</a>.`,
  },
  {
    title: "Plug-In",
    subheader: "Finding purpose",
    image: "https://nairobichapel.net/wp-content/uploads/2015/07/plug-in.png",
    description: "Plug-In is a 10-week experience for anyone who needs to discover God’s purpose for them.",
    details: "During this incredible 10 week experience, we seek to know God through His Word and our wrong perceptions of Him begin to to be sensitively addressed. Plug-In is about true community where deep bonding and lifelong friendships are often developed. Plug-In is about knowing God and His purpose for your life.",
  },
  {
    title: "E-Groups",
    subheader: "Fishers of men",
    image: "https://nairobichapel.net/wp-content/uploads/2018/03/egroups-1.jpg",
    description: "The body of Christ at Nairobi Chapel is discipled through small groups called eGroups.",
    details: "Our eGroups meet throughout the week at different locations. They are designed to help you build healthy relationships with others in a safe environment while growing spiritually. eGroups is where the life of the church really happens. At Nairobi Chapel, our eGroup Ministry lays emphasis on four vital areas that promote a church’s growth and well being. We call these the ‘ABCDEs’ of an eGroup’s Life - Accountability, Belonging, Care, Discipleship & Evangelism.",
  },
  {
    title: "Jabari",
    subheader: "Men's Ministry",
    image: jabariImg,
    description: "Brave warriors, skilled with shield and spear. Lion-faced and swift as gazelles (1 Chronicles 12:8)",
    details: "The Jabari Men’s Ministry is a gathering place for men to grow their faith in depth as they address faith issues relevant to men. Jabari aims to create an environment for men to encounter and relate with Jesus Christ unashamedly and become disciples who live out their faith at home, in the church, community and the marketplace.",
  },
  {
    title: "Binti",
    subheader: "Women's Ministry",
    image: bintiImg,
    description: "Binti seeks to provide ladies, young and old, with opportunities to build authentic relationships.",
    details: "This ministry encourages ladies to function in their true identity, as we empower them on issues of life and faith. When women work together, it’s a bond unlike any other. Strong women stand together, lift each other up and empower one another through prayer. Women don’t always get to choose life’s circumstances but we do get to choose how we’ll respond: with Strength, Stamina and a Staying Perseverance. That can only be possible if we choose to have God walk with us. Binti lays the foundation to make that possible.",
  },
  {
    title: "T-Track",
    subheader: "Discipleship",
    image: "https://nairobichapel.net/wp-content/uploads/2018/02/NC-T-Track-edited.png",
    description: "Our Transformation Track (T-Track) is a simple guide for maturing as a follower of Jesus Christ.",
    details: "REACH is part of the Track focusing on reaching out to social contacts, friends, family and the world with the gospel of Christ. CONNECT, allows people to prayerfully begin the journey towards Christ, once they visit us and GROW helps them mature in their faith.",
  },
];

const frontlineMinistries = [
  {
    title: "Echo Africa",
    subheader: "Mission Outreach",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Transforming lives across Africa through missions, education, and empowerment.",
    details: "Echo Africa partners with local churches and organizations to bring hope and resources to underserved communities.",
  },
  {
    title: "One Lamb",
    subheader: "Ending child exploitation",
    image: "https://onelamb.org/wp-content/uploads/2016/08/Main-Cover-Photo.jpg",
    description: "The One Lamb ministry works with communities to end sexual exploitation of children through the gospel of Jesus Christ.",
    details: "One Lamb began in 2011, inspired by the powerful impact of a CNN Freedom Project documentary that exposed the human trafficking and exploitation of children in India and Nepal. Further research revealed a heartbreaking reality in Kenya, where girls as young as 12 at the coast, and even as young as 8 in urban slums, were being commercially sexually exploited, often with the involvement or coercion of a parent or caregiver. In response, One Lamb was founded to bring hope, rescue and restoration to these vulnerable children.",
  },
  {
    title: "Safe Families",
    subheader: "Foster Care",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "Safe Families for Children is a community of families that extend the African culture of compassion and hospitality to vulnerable families.",
    details: "In the past, crises like illnesses or unemployment wouldn't devastate families because relatives and the community would support affected families. Today, nuclear families are isolated, leaving children vulnerable to neglect and abuse. This ministry extends the love of Christ to children in such families by placing them temporarily in Safe Homes while we support their parents in crisis management.",
  },
  {
    title: "Tumaini Clinics",
    subheader: "Health & Wellness",
    image: tumainiClinicsImg,
    description: "Tumaini Clinics provide medical care to residents of Kibra and Korogocho, two of the largest informal settlements in Nairobi.",
    details: "This ministry offers medical care and maternity services to those who struggle financially. In Korogocho and Kibra, approximately 3,000 and 500 patients are treated every month, respectively. They pay Kshs. 500 for services that would otherwise cost Kshs. 5,000 without any compromise on medical standards.",
  },
];

const Ministries = () => {
  const [expandedOther, setExpandedOther] = React.useState(Array(ministries.length).fill(false));
  const [expandedFrontline, setExpandedFrontline] = React.useState(Array(frontlineMinistries.length).fill(false));

  const handleExpandOther = (idx) => {
    setExpandedOther(prev => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };
  const handleExpandFrontline = (idx) => {
    setExpandedFrontline(prev => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };
  return (
    <Box sx={{ mt: 7, mb: 6, width: '100%', px: { xs: 2, md: 4 } }}>
      <Typography variant="h5" fontWeight={700} mb={1} color="#333" sx={{ fontSize: { xs: 22, md: 26 } }}>
        Ministries
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" mb={3} sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 400 }}>
        Explore our various ministries and find your place to serve, grow and connect.
      </Typography>
      <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ fontSize: { xs: 16, md: 18 }, color: '#7F00FF' }}>
        Frontline Ministries
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
        {frontlineMinistries.map((ministry, idx) => {
          const ministryProps = { ...ministry };
          if (ministry.title === 'Safe Families') {
            ministryProps.image = safeFamiliesImg;
          }
          return (
            <Box key={idx} sx={{ flex: '1 1 260px', maxWidth: 600, minWidth: 260, display: 'flex' }}>
              <FrontlineMinistryCard
                {...ministryProps}
                idx={idx}
                expanded={expandedFrontline[idx]}
                onExpand={() => handleExpandFrontline(idx)}
              />
            </Box>
          );
        })}
      </Box>
      <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ fontSize: { xs: 16, md: 18 }, color: '#7F00FF' }}>
        Other Ministries
      </Typography>
      {ministries.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          Nothing at the moment
        </Typography>
      ) : (
        <Box display="flex" flexWrap="wrap" gap={2}>
          {ministries.map((ministry, idx) => (
            <Box key={idx} sx={{ flex: '1 1 260px', maxWidth: 345, minWidth: 260, display: 'flex' }}>
              <MinistriesCard
                {...ministry}
                idx={idx}
                expanded={expandedOther[idx]}
                onExpand={() => handleExpandOther(idx)}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Ministries;
