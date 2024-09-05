import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  useToast,
  VStack,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.campusspace.startupearly.com/api/v1/users/token/",
        {
          username,
          password,
        }
      );
      const { access, refresh } = response.data;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      toast({
        position: "top-right",
        title: "Login successful!",
        description: "You are now logged in.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        position: "top-right",
        title: "Login failed!",
        description:
          error.response?.data?.detail ||
          "An error occurred. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box w={"100%"} h="100vh">
        <Flex
          h="100vh"
          flexDirection={{ base: "row", sm: "column", lg: "row" }}
        >
          <Box
            bg="#242565"
            width={{ base: "100%", lg: "50%" }}
            h={{ base: "auto", lg: "100vh" }}
            display={{ base: "none", sm: "flex" }}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={{ base: "24px", sm: "60px" }}
          >
            <Box>
              <Image src="/loginleftimage.png"></Image>
              <Box px="18px" mt="35px">
                <Text
                  mb="10px"
                  fontSize="34px"
                  fontWeight="700"
                  lineHeight="44px"
                  color="#FFFFFF"
                  textAlign="left"
                >
                  Make your own Event
                </Text>
                <Text
                  fontSize="18px"
                  fontWeight="400"
                  lineHeight="23px"
                  color="#FFFFFF"
                  textAlign="left"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            width={{ base: "100%", lg: "50%" }}
            bg="#FFFFFF"
            h={{ base: "auto", lg: "100vh" }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={{ base: "24px", sm: "60px" }}
          >
            <Box maxW={"384px"} w="100%">
              <Heading
                as="h1"
                mb="12px"
                fontSize="24px"
                fontWeight="600"
                lineHeight="24px"
                color="#09090B"
                textAlign="center"
              >
                Sign In
              </Heading>
              <Text
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
                color="#71717A"
              >
                Enter your details below to access your account
              </Text>
              <Box my="24px">
                <FormControl id="username" isRequired>
                  <Input
                    mb="13px"
                    fontSize="14px"
                    fontWeight="400"
                    lineHeight="20px"
                    color="#71717A"
                    border="1px solid #E4E4E7"
                    p="8px 12px"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    _focus={{ border: "1px solid #E4E4E7" }}
                    _hover={{ border: "1px solid #E4E4E7" }}
                    _focusVisible={{ border: "1px solid #E4E4E7" }}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <Input
                    mb="13px"
                    fontSize="14px"
                    fontWeight="400"
                    lineHeight="20px"
                    color="#71717A"
                    border="1px solid #E4E4E7"
                    p="8px 12px"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    _focus={{ border: "1px solid #E4E4E7" }}
                    _hover={{ border: "1px solid #E4E4E7" }}
                    _focusVisible={{ border: "1px solid #E4E4E7" }}
                  />
                </FormControl>
                <Button
                  background="#242565"
                  colorScheme="#242565"
                  width="full"
                  isLoading={loading}
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
              </Box>
              <Flex gap="5px" alignItems="center" justifyContent="center">
                <Text
                  fontSize={{ base: "14px", sm: "18px" }}
                  fontWeight="400"
                  lineHeight="23px"
                  color="#71717A"
                  textAlign="left"
                >
                  Forgot Password?
                </Text>
                <Text
                  fontSize={{ base: "14px", sm: "18px" }}
                  fontWeight="400"
                  lineHeight="23px"
                  color="#242565"
                  textAlign="left"
                  cursor="pointer"
                >
                  Reset Password
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Login;
