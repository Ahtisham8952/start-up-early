// src/components/Sidebar.js
import React, { useState } from 'react';
import { Box, VStack, Text, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Tabs, TabList, Tab, useDisclosure, Image, Divider } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Sidebar = ({ onTabChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTab, setSelectedTab] = useState(1); // Default to "Events" tab

  const handleTabChange = (index) => {
    setSelectedTab(index);
    onTabChange(index); // Notify parent component of tab change
    if (isOpen) {
      onClose(); // Close the sidebar when a tab is selected on mobile
    }
  };

  return (
    <>
      <Box
        display={{ base: 'none', lg: 'block' }}
        width="20%"
        box-shadow= "0px 4px 12.9px 0px #00000014"


        
      
        bg="#FFFFFF"
       borderRadius="17px"
        py="23px"
        px="30px"
      >
        <Box spacing={8} align="start">
          <Image src="/logo.svg"></Image>
          <Divider bg="#808080B2" my="33px"/>
          <Tabs
            orientation="vertical"
            variant="unstyled"
            index={selectedTab}
            onChange={handleTabChange}
          >
            <TabList w="100%" gap="15px" >
              <Tab
              p="10px 14px"
                  _selected={{ color: '#596BCC',fontWeight:'600',border:'none',bg:'rgba(61, 55, 241, 0.12)' }} justifyContent="flex-start"
                  _focus={{border:'none',outline:'none'}}
                  fontSize="14px" fontWeight="400" lineHeight="18px"
                alignItems={"center"} gap="12px" // Red color for the active tab
              >
                 <Image src="/homeicon.svg"></Image>
                 Home
              
              </Tab>
              <Tab
                p="10px 14px"
                     _selected={{ color: '#596BCC',fontWeight:'600',border:'none',bg:'rgba(61, 55, 241, 0.12)' }} justifyContent="flex-start"
                _focus={{border:'none',outline:'none'}}
                alignItems={"flex-start"} gap="12px" // Red color for the active tab
              >
                 <Image src="/eventicon.svg"></Image>
                 Events
              
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </Box>

      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon color="black" />}
        display={{ base: 'block', lg: 'none' }}
        onClick={onOpen}
        position="absolute"
        top="10px"
        _focus={{outline:'none'}}
      
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Image m="30px"  w='200px' src="/logo.svg"></Image>
          <Divider bg="#808080B2" my="10px"/>
          <DrawerBody>
            <Tabs
              orientation="vertical"
              variant="unstyled"
              index={selectedTab}
              onChange={handleTabChange}
            >
               <TabList w="100%" gap="15px" >
              <Tab
              p="10px 14px"
                  _selected={{ color: '#596BCC',fontWeight:'600',border:'none',bg:'rgba(61, 55, 241, 0.12)' }} justifyContent="flex-start"
                  _focus={{border:'none',outline:'none'}}
                  fontSize="14px" fontWeight="400" lineHeight="18px"
                alignItems={"center"} gap="12px" // Red color for the active tab
              >
                 <Image src="/homeicon.svg"></Image>
                 Home
              
              </Tab>
              <Tab
                p="10px 14px"
                     _selected={{ color: '#596BCC',fontWeight:'600',border:'none',bg:'rgba(61, 55, 241, 0.12)' }} justifyContent="flex-start"
                _focus={{border:'none',outline:'none'}}
                alignItems={"flex-start"} gap="12px" // Red color for the active tab
              >
                 <Image src="/eventicon.svg"></Image>
                 Events
              
              </Tab>
            </TabList>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
