import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShareIcon from '@mui/icons-material/Share';
import Tooltip from '@mui/material/Tooltip';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export default function PrimarySearchAppBar({ sidebarExpanded, onToggleSidebar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [shareAnchorEl, setShareAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isShareMenuOpen = Boolean(shareAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const homepageUrl = window.location.origin + '/';

  const handleShareClick = (event) => {
    setShareAnchorEl(event.currentTarget);
  };

  const handleShareClose = () => {
    setShareAnchorEl(null);
  };

  const handleShare = (type) => {
    let url = '';
    const encodedUrl = encodeURIComponent(homepageUrl);
    switch (type) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodedUrl}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/dialog/share?app_id=87741124305&display=popup&href=${encodedUrl}&redirect_uri=${encodedUrl}`;
        break;
      case 'x':
        url = `https://x.com/intent/post?url=${encodedUrl}`;
        break;
      case 'email':
        url = `mailto:?subject=Check%20out%20this%20site&body=${encodedUrl}`;
        break;
      default:
        break;
    }
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    handleShareClose();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(homepageUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      alert('Failed to copy link.');
    }
    handleShareClose();
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{ sx: { mt: 1, minWidth: 180 } }}
    >
      <MenuItem onClick={handleMenuClose}></MenuItem>
      <MenuItem onClick={handleMenuClose}></MenuItem>
      <MenuItem>Admin Dashboard <br />(Coming Soon)</MenuItem>
    </Menu>
  );

  // Notification popover
  const renderNotificationMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{ sx: { mt: 1, minWidth: 220 } }}
    >
      <MenuItem disabled>No new notifications</MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>View all notifications</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{
        width: '100vw',
        left: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: 'rgba(245, 242, 255, 0.85)', // subtle purple-tinted background
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        backdropFilter: 'blur(8px)',
      }}>
        <Toolbar>
          <IconButton
            size="large"
            aria-label={sidebarExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
            onClick={() => { onToggleSidebar(); }}
            sx={{ mr: 1, color: '#7F00FF' }}
          >
            <MenuIcon style={{ fontSize: 24 }} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', height: 48 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Logo" style={{ height: 40, width: 'auto', marginRight: 8, cursor: 'pointer' }} />
            </Link>
          </Box>
          {/* Search removed */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Share Icon with Tooltip */}
            <Tooltip title="Share" arrow>
              <IconButton size="large" aria-label="share" sx={{ color: '#7F00FF' }} onClick={handleShareClick}>
                <ShareIcon style={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={shareAnchorEl}
              open={isShareMenuOpen}
              onClose={handleShareClose}
              PaperProps={{ sx: { mt: 1, minWidth: 200 } }}
            >
              <MenuItem onClick={() => handleShare('whatsapp')}>
                <WhatsAppIcon sx={{ mr: 1, color: '#25D366' }} /> WhatsApp
              </MenuItem>
              <MenuItem onClick={() => handleShare('facebook')}>
                <FacebookIcon sx={{ mr: 1, color: '#4267B2' }} /> Facebook
              </MenuItem>
              <MenuItem onClick={() => handleShare('x')}>
                <TwitterIcon sx={{ mr: 1, color: 'black' }} /> X
              </MenuItem>
              <MenuItem onClick={() => handleShare('email')}>
                <EmailIcon sx={{ mr: 1, color: '#EA4335' }} /> Email
              </MenuItem>
              <MenuItem onClick={handleCopy}>
                <ContentCopyIcon sx={{ mr: 1 }} /> Copy Link
              </MenuItem>
            </Menu>
            {/* Avatar */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{ color: '#7F00FF' }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Spacer to offset fixed AppBar height */}
      <Toolbar />
      {renderNotificationMenu}
      {renderMenu}
    </Box>
  );
}
