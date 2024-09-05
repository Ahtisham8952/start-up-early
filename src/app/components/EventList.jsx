import React, { useEffect, useState } from 'react';
import { Box, Grid, Text, Button, VStack, useToast, Spinner, Heading, Image, Flex,Input } from '@chakra-ui/react';
import axios from 'axios';
import ProfileDropdown from './ProfileDropdown';
import CustomDropdown from './CustomDropdown';


const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }); 
  return { day, month };
};

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const fetchEvents = async () => {
    setLoading(true);
    const accessToken = localStorage.getItem('accessToken'); 

    if (!accessToken) {
      toast({
        title: 'Error!',
        description: 'No access token found. Please log in again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('https://api.campusspace.startupearly.com/api/v1/events/all/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setEvents(response.data);
      toast({
        title: 'Events loaded!',
        description: 'Successfully fetched all events.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Failed to load events',
        description: error.response?.data?.detail || 'An error occurred while fetching events.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
    <Box p="18px 0px" mt={{base:'10px',lg:'0px'}}>
          <Flex alignItems="center" justifyContent="space-between">
          <Text
                 
                  fontSize="24px"
                  fontWeight="400"
                  lineHeight="31px"
                  color="#000606"
                 
                >
                 Events
                </Text>
                <Box >
                  <ProfileDropdown/>

                </Box>
          </Flex>

        </Box>
        <Box my="48px" bg="#242565" p={{base:'20px 20px',md:'30px 50px'}} boxShadow= "0px 10px 50px 0px #3D37F140"
        borderRadius="20px"
        >
          <Flex justifyContent="space-between"  flexWrap={{base:'wrap',md:'nowrap'}} gap='20px'>
            <Box w={{base:'100%',md:'30%'}}>
            <Text
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="20px"
                  color="#FFFFFF"
            
                >
                  Search Event
                </Text>
                <Input type='text' px='0px' placeholder='Konser Jazz' fontSize="22px"
                border="none"
                borderRadius="0px"
                borderBottom="1px solid #7778B0"
                  fontWeight="700"
                  lineHeight="28px"
                  color="#FFFFFF"
                  _focus={{ borderBottom:"1px solid #7778B0" }}
                  _hover={{ borderBottom:"1px solid #7778B0" }}
                  _focusVisible={{ borderBottom:"1px solid #7778B0" }}
                   ></Input>
            </Box>
            <Box w={{base:'100%',md:'30%'}}>
            <Text
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="20px"
                  color="#FFFFFF"
            
                >
                 Place
                </Text>
                <Input type='text' px='0px' placeholder='Indonesia' fontSize="22px"
                border="none"
                borderRadius="0px"
                borderBottom="1px solid #7778B0"
                  fontWeight="700"
                  lineHeight="28px"
                  color="#FFFFFF"
                  _focus={{ borderBottom:"1px solid #7778B0" }}
                  _hover={{ borderBottom:"1px solid #7778B0" }}
                  _focusVisible={{ borderBottom:"1px solid #7778B0" }}
                   ></Input>
            </Box>
            <Box w={{base:'100%',md:'30%'}}>
            <Text
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="20px"
                  color="#FFFFFF"
            
                >
                 Time
                </Text>
                <Input type='date' px='0px' placeholder='any Date' fontSize="22px"
                border="none"
                borderRadius="0px"
                borderBottom="1px solid #7778B0"
                  fontWeight="700"
                  lineHeight="28px"
                  color="#FFFFFF"
                  _focus={{ borderBottom:"1px solid #7778B0" }}
                  _hover={{ borderBottom:"1px solid #7778B0" }}
                  _focusVisible={{ borderBottom:"1px solid #7778B0" }}
                   ></Input>
            </Box>
          </Flex>

        </Box>
   
    <Box  >
      <Flex justifyContent="space-between" alignItems={"center"}  mb='80px' flexDirection={{base:'column',md:'row'}} >
      <Heading w="max-content"    overflow="hidden"
  
    whiteSpace="nowrap" as="h1" fontSize="2xl" mb={6} color="#242565">Upcoming Events</Heading>
      <Flex gap="20px" flexWrap={"wrap"} justifyContent={{base:'flex-start',md:'flex-end'}}>
        <CustomDropdown/>
        <CustomDropdown/>
        <CustomDropdown/>
      </Flex>
      </Flex>
     
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Spinner size="xl" />
        </Box>
      ) : (
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)',lg: 'repeat(3, 1fr)' }} gap="29px" w="100%">
          {events.length > 0 ? (
            events.map((event) => {
              const formattedDate = formatDate(event.start_date); // Use the function and store the result
              return (
                <Box
                cursor={"pointer"}
                  key={event.id}
                 w="100%"
                  shadow="md"
                  borderWidth="1px"
                 borderRadius="30px"
                  _hover={{ shadow: 'lg' }}
                  transition="all 0.2s"
                >
                 
                  <Image borderRadius="30px 30px 0px 0px" w="100%" h="197px" objectFit="cover" src={event.image} alt={event.title}   />
                  <Box p="16px" >
                    <Flex justifyContent="space-between">
                    <Box p="4px 10px" bg="rgba(61, 55, 241, 0.12)" w="max-content" borderRadius="10px" mb="10px" >
                    <Text fontSize="14px" fontWeight="600" lineHeight="24px" color="#596BCC">
                   {event.status}
                    </Text>
                    </Box>
                    <Box p="4px 10px" bg="rgba(61, 55, 241, 0.12)" w="max-content" borderRadius="10px" mb="10px" >
                    <Text fontSize="14px" fontWeight="600" lineHeight="24px"  color={event.type === 'private' ? 'red.500' : event.type === 'outside' ? 'green.500' : '#596BCC'}>
                   {event.type}
                    </Text>
                    </Box>

                    </Flex>
                    
                    <Flex gap="20px">
                      <Box>
                      <Box color="gray.500">
                      <Text  color="#3D37F1" fontSize="11px" fontWeight="700" lineHeight="14px" textTransform="uppercase">
                        {formattedDate.month}
                      </Text>
                      <Text fontSize="28px" fontWeight="700" lineHeight="37px" color="#000000">
                        {formattedDate.day} 
                      </Text>
                    
                    </Box>
                      </Box>
                      <Box>
                      <Text fontSize="16px" fontWeight="700" lineHeight="24px" color="#000000" >
                      {event.title}

                    </Text>
                    <Text fontSize="14px" fontWeight="400" lineHeight="21px" color="#6A6A6A">
                      {event.detail}
                    </Text>
                      </Box>
                    </Flex>
                  </Box>
                  
                </Box>
              );
            })
          ) : (
            <Text>No events available.</Text>
          )}
        </Grid>
      )}
      <Flex justifyContent={"center"}>
      <Button
      p="18px 46px"
      h="60px"
       mt="62px"
        colorScheme="transparent"
        border='1.5px solid #3D37F1'
        borderRadius="50px"
        color="#3D37F1"
        fontSize="18px" fontWeight="700" lineHeight="23px"
        _focus={{outline:'none'}}
        
      >
        Load More
      </Button>
      </Flex>
      
    </Box>
    </>
  );
};

export default EventList;
