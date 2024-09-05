import React, { useState, useRef } from 'react';
import { Box, Text, Menu, MenuItem, Button, Image } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();


  const toggleDropdown = () => setIsOpen(!isOpen);

  
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
    <Box position="relative" ref={dropdownRef} bg="#F2F4FF" p="5px 20px 5px 5px" borderRadius="24px">
      <Button
     
      _focus={{outline:'none'}}
        onClick={toggleDropdown}
        background="none"
        _hover={{ background: 'none',borderColor:'white' }}
        display="flex"
        alignItems="center"
        gap="10px"
        p='0px'
        justifyContent={"space-between"}

      >
        
 
        <Text
                  fontSize="14px"
                  fontWeight="600"
                  lineHeight="18px"
                  color="#1D275F"
                 
              
                >
                Weekdays
                </Text>
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
            <MenuItem >-</MenuItem>
            <MenuItem >-</MenuItem>
            <MenuItem >-</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};

export default CustomDropdown;
