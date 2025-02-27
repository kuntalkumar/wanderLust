import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Alert, AlertIcon, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      navigate('/');

      handleLogin(email); 
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Heading as="h2" size="xl" textAlign="center">
        Login
      </Heading>
      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired mt={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" width="full">
          Login
        </Button>
      </form>
      <Text mt={4} textAlign="center">
        If you are not registered, <Button variant="link" colorScheme="teal" onClick={() => navigate('/signup')}>sign up here</Button>.
      </Text>
    </Box>
  );
};

export default Login;
