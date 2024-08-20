import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  FormErrorMessage,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (valid) {
      setAuthError('');
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      navigate('/login');
    }
  };

  return (
    <Box maxW={{ base: 'sm', md: 'md', lg: 'lg' }} bgColor={"#cceaf7"} mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading mb={6} textAlign="center">Signup</Heading>
      {authError && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {authError}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl mb={4} isInvalid={!!emailError}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            required
          />
          {emailError && <FormErrorMessage>{emailError}</FormErrorMessage>}
        </FormControl>
        <FormControl mb={4} isInvalid={!!passwordError}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError('');
            }}
            required
          />
          {passwordError && <FormErrorMessage>{passwordError}</FormErrorMessage>}
        </FormControl>
        <FormControl mb={4} isInvalid={!!confirmPasswordError}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError('');
            }}
            required
          />
          {confirmPasswordError && <FormErrorMessage>{confirmPasswordError}</FormErrorMessage>}
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">Signup</Button>
      </form>
    </Box>
  );
};

export default Signup;
