import * as React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign'; // Notices
import PlayCircleIcon from '@mui/icons-material/PlayCircle'; // Sermons
import GroupsIcon from '@mui/icons-material/Groups'; // Ministries
import EventIcon from '@mui/icons-material/Event';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'; // Connect
import CopyrightIcon from '@mui/icons-material/Copyright';

const drawerWidth = 240;

const navItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Notices', icon: <CampaignIcon />, path: '/notices' },
  { text: 'Sermons', icon: <PlayCircleIcon />, path: '/sermons' },
  { text: 'Ministries', icon: <GroupsIcon />, path: '/ministries' },
  { text: 'Events', icon: <EventIcon />, path: '/events' },
  { text: 'Connect', icon: <ConnectWithoutContactIcon />, path: '/connect' },
];

export default function NewSidebar({ expanded }) {
  const location = useLocation();
  const width = expanded ? drawerWidth : 64;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          transition: 'width 0.3s',
          '& .MuiDrawer-paper': {
            width,
            boxSizing: 'border-box',
            transition: 'width 0.3s',
            overflowX: 'hidden',
            background: 'rgba(245, 242, 255, 0.85)', // subtle purple-tinted background
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh',
            minHeight: '100vh',
          },
        }}
        open
      >
        <Box>
          {/* Spacer to match header height */}
          <Box sx={{ minHeight: 64 }} />
          <List>
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    sx={{
                      minHeight: 48,
                      justifyContent: expanded ? 'initial' : 'center',
                      px: 2.5,
                      borderRadius: 2,
                      my: 0.5,
                      mt: idx === 0 ? 1.5 : 0, // margin above Home
                      color: isActive ? '#7F00FF' : '#555',
                      '&:hover': {
                        background: 'rgba(127,0,255,0.08)',
                        color: '#7F00FF',
                      },
                    }}
                  >
                    <ListItemIcon sx={{
                      minWidth: 0,
                      mr: expanded ? 2 : 'auto',
                      justifyContent: 'center',
                      color: isActive ? '#7F00FF' : '#555',
                    }}>
                      {item.icon}
                    </ListItemIcon>
                    {expanded && <ListItemText primary={item.text} sx={{
                      color: isActive ? '#7F00FF' : '#555',
                      fontWeight: isActive ? 600 : 400,
                      fontSize: 13,
                      letterSpacing: 0.2,
                    }} />}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box sx={{ textAlign: 'left', pb: 2, pt: 1, pl: expanded ? 2 : 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#aaa', fontSize: 10 }}>
            <CopyrightIcon sx={{ fontSize: 10, verticalAlign: 'middle', mb: '1px' }} />
            <span style={{ display: 'inline-block', verticalAlign: 'middle', fontWeight: 500 }}>{new Date().getFullYear()}</span>
          </Box>
          <Box sx={{ color: '#aaa', fontSize: 10, letterSpacing: 1, mt: 0.5 }}>
            Globe Technologies
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
