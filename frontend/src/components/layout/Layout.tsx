import React from 'react';
import { Box, styled } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const LayoutRoot = styled(Box)({
  display: 'flex',
  minHeight: '100vh'
});

const MainContent = styled(Box)({
  flexGrow: 1,
  paddingTop: 64,
  paddingLeft: 280,
  minHeight: '100vh'
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutRoot>
      <Navbar />
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </LayoutRoot>
  );
};

export default Layout;
