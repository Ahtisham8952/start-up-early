// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import EventList from './EventList';
import HomeContent from './HomeContent'; // Assuming you have a HomeContent component
import ProfileDropdown from './ProfileDropdown';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to "Events" tab

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Box >

   
    <Flex bg="#F5F5F5" p="22px" width="100%" gap="36px">
      <Sidebar onTabChange={handleTabChange} />
      <Box

    
      
        width={{base:'100%',lg:'80%'}}
      >
        
        {activeTab === 0 ? <HomeContent /> : <EventList />}
      </Box>
    </Flex>
    </Box>
  );
};

export default Dashboard;
