import React, { useState } from "react";
import { Link as Rlink } from "react-router-dom";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import "./Address.css";

function GuestInformation() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formSubmit = (el) => {
    el.preventDefault();
    console.log("Form submitted:", {
      name,
      gender,
      email,
      phoneNumber,
      address,
    });
    setMessage("Your address has been saved and payment has been done, Thank you for booking");

    setName("");
    setGender("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  };

  const handleModalClose = () => {
    onClose();
    window.location.href = "/discover";
  };

  return (
    
    <Flex justify="flex-start">
      <Box className="form-container">
        <form onSubmit={formSubmit}>
          <FormControl className="chakra-form-control"  isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="Enter your 10 digit phone number"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </FormControl>
          <Button className="chakra-button" type="submit">
            Submit
          </Button>
        </form>
      </Box>
      
      <Box className="payment-container">
        <FormControl id="cardNumber" className="chakra-form-control" isRequired>
          <FormLabel>Card Number</FormLabel>
          <Input type="text" placeholder="Card Number" maxLength={10} />
        </FormControl>
        <HStack spacing="4" mb="4">
          <FormControl id="expiryDate" isRequired>
            <FormLabel>Expiration Date</FormLabel>
            <Input type="text" placeholder="MM/YYYY" maxLength={7} />
          </FormControl>
          <FormControl id="cvv" isRequired>
            <FormLabel>CVV</FormLabel>
            <Input type="text" placeholder="CVV" maxLength={3} />
          </FormControl>
        </HStack>
        <Button className="chakra-button" onClick={onOpen}>
          Pay Now
        </Button>
        <Modal isOpen={isOpen} onClose={handleModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Thank You!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{message}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" bg="#e4640d;" mr={3} onClick={handleModalClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}

export default GuestInformation;

