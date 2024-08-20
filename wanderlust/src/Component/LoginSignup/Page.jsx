// Page.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setIsLoggedIn(true);
      setUsername(storedEmail);
    }
  }, []);

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUsername(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  };

  return (
    <div>
      <Flex justify="center" mt={10} flexDirection={{ base: 'column', md: 'row' }}>
        {!isLoggedIn ? (
          <>
            <Button as={Link} to="/login" m={2} colorScheme="teal" width={{ base: '100%', md: 'auto' }}>
              Login
            </Button>
            <Button as={Link} to="/signup" m={2} colorScheme="teal" width={{ base: '100%', md: 'auto' }}>
              Signup
            </Button>
          </>
        ) : (
          <Flex align="center">
            <Text m={2} fontSize="lg">Welcome, {username}</Text>
            <Button onClick={handleLogout} m={2} colorScheme="teal" width={{ base: '100%', md: 'auto' }}>
              Logout
            </Button>
          </Flex>
        )}
      </Flex>
      <Box mt={10}>
        {/* <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
      </Box>
    </div>
  );
};

export default Page;
