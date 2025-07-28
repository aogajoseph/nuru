import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = React.useState(false);
  return (
    <Box sx={{ display: "flex", width: '100%' }}>
      <CssBaseline />
      <Header sidebarExpanded={sidebarExpanded} onToggleSidebar={() => setSidebarExpanded((prev) => !prev)} />
      <Sidebar expanded={sidebarExpanded} />
      <Box component="main" sx={{
        flexGrow: 1,
        width: '100%',
        mt: 8, // 8 * 8px = 64px (default AppBar height)
        height: 'calc(100vh - 64px)',
        overflowY: 'auto',
        position: 'relative',
      }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
