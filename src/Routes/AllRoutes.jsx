import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Link as ChakraLink, Text, Button } from '@chakra-ui/react';
import PlaceCard from '../Component/PlaceCard';
import Hotel from '../Component/Hotels';
import Details from '../Component/Details';
import Login from '../Component/LoginSignup/Login';
import Signup from '../Component/LoginSignup/Signup';
import RazorpayPayment from '../Component/Payment/RazorpayPayment';

const Navbar = ({ isLoggedIn, username, handleLogout }) => {
  const location = useLocation();
  const isLoginPath = location.pathname === '/login';
  const isSignupPath = location.pathname === '/signup';

  return (
    <Flex as="nav" bg="#29335c" p={4} color="white">
      <ChakraLink as={Link} to="/" mx={2}>
        Home
      </ChakraLink>
      <ChakraLink as={Link} to="/holidays" mx={2}>
        Holidays
      </ChakraLink>
      <ChakraLink as={Link} to="/hotels" mx={2}>
        Hotels
      </ChakraLink>

      {!isLoggedIn && !isLoginPath && !isSignupPath && (
        <>
          <ChakraLink as={Link} to="/login" mx={2}>
            Login
          </ChakraLink>
          <ChakraLink as={Link} to="/signup" mx={2}>
            Signup
          </ChakraLink>
        </>
      )}

      {isLoggedIn && (
        <Flex align="center" ml="auto">
          <Text m={2} fontSize="lg">Welcome, {username}</Text>
          <Button onClick={handleLogout} colorScheme="teal" mx={2}>
            Logout
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

const App = () => {
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
    <ChakraProvider>
        <Box>
          <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<PlaceCard />} />
            <Route path="/holidays" element={<PlaceCard />} />
            <Route path="/hotels" element={<Hotel />} />
            <Route path="/hotels/:id" element={<Details />} />
            <Route path="/payment" element={<RazorpayPayment />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Box>
    </ChakraProvider>
  );
};

export default App;
