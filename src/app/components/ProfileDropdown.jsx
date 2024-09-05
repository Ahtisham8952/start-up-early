import React, { useState, useRef } from 'react';
import { Box, Text, Avatar, Menu, MenuItem, Button, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle click outside to close the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box position="relative" ref={dropdownRef} bg="#FFFFFF" p="5px 20px 5px 5px" borderRadius="24px">
      <Button
     
      _focus={{outline:'none'}}
        onClick={toggleDropdown}
        background="none"
        _hover={{ background: 'none',borderColor:'white' }}
        display="flex"
        alignItems="center"
        gap="10px"
        p='0px'

      >
        <Image h="38px" w="38px" src="/useravatar.svg"></Image>
        <Box>
        <Text
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight="18px"
                  color="#292D32"
                  textAlign="left"
              
                >
                 Alex meian
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="15px"
                  color="rgba(41, 45, 50, 0.44)"
              
                >
                Prodcut manager
                </Text>
        </Box>
        <ChevronDownIcon/>
       
      </Button>

      {isOpen && (
        <Box
          position="absolute"
          top="50px"
          right="0"
          zIndex="1000"
          bg="white"
          borderRadius="md"
          shadow="lg"
          width="150px"
          overflow="hidden"
        >
          <Menu>
            <MenuItem >Profile</MenuItem>
            <MenuItem >Settings</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};

export default ProfileDropdown;
