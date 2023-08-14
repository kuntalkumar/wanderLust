// import React, { useState } from "react";
// import { Link as Rlink } from "react-router-dom";
// import {
//   Box,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Button,
//   HStack,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Text,
// } from "@chakra-ui/react";

// import "./Address.css";

// function GuestInformation() {
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [message, setMessage] = useState("");
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const formSubmit = (el) => {
//     el.preventDefault();
//     console.log("Form submitted:", {
//       name,
//       gender,
//       email,
//       phoneNumber,
//       address,
//     });
//     setMessage("Your address has been saved and payment has been done, Thank you for booking");

//     setName("");
//     setGender("");
//     setEmail("");
//     setPhoneNumber("");
//     setAddress("");
//   };

//   const handleModalClose = () => {
//     onClose();
//     window.location.href = "/discover";
//   };

//   return (
    
//     <Flex justify="flex-start">
//       <Box className="form-container">
//         <form onSubmit={formSubmit}>
//           <FormControl className="chakra-form-control"  isRequired>
//             <FormLabel>Name</FormLabel>
//             <Input 
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </FormControl>
//           <FormControl mb={4} isRequired>
//             <FormLabel>Gender</FormLabel>
//             <Select
//               placeholder="Select gender"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               required
//             >
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </Select>
//           </FormControl>
//           <FormControl mb={4} isRequired>
//             <FormLabel>Email</FormLabel>
//             <Input
//               type="email"
//               value={email}
//               placeholder="Enter your Email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </FormControl>
//           <FormControl mb={4} isRequired>
//             <FormLabel>Phone Number</FormLabel>
//             <Input
//               placeholder="Enter your 10 digit phone number"
//               type="tel"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//             />
//           </FormControl>
//           <FormControl mb={4} isRequired>
//             <FormLabel>Address</FormLabel>
//             <Input
//               type="text"
//               placeholder="Enter your Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </FormControl>
//           <Button className="chakra-button" type="submit">
//             Submit
//           </Button>
//         </form>
//       </Box>
      
//       <Box className="payment-container">
//         <FormControl id="cardNumber" className="chakra-form-control" isRequired>
//           <FormLabel>Card Number</FormLabel>
//           <Input type="text" placeholder="Card Number" maxLength={10} />
//         </FormControl>
//         <HStack spacing="4" mb="4">
//           <FormControl id="expiryDate" isRequired>
//             <FormLabel>Expiration Date</FormLabel>
//             <Input type="text" placeholder="MM/YYYY" maxLength={7} />
//           </FormControl>
//           <FormControl id="cvv" isRequired>
//             <FormLabel>CVV</FormLabel>
//             <Input type="text" placeholder="CVV" maxLength={3} />
//           </FormControl>
//         </HStack>
//         <Button className="chakra-button" onClick={onOpen}>
//           Pay Now
//         </Button>
//         <Modal isOpen={isOpen} onClose={handleModalClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Thank You!</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <Text>{message}</Text>
//             </ModalBody>
//             <ModalFooter>
//               <Button colorScheme="green" bg="#e4640d;" mr={3} onClick={handleModalClose}>
//                 Close
//               </Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </Box>
//     </Flex>
//   );
// }

// export default GuestInformation;


import React, { useState } from 'react';
import './Address.css';

function Address() {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // In a real app, you'd make an API call to fetch flight data based on the search criteria
    // For this example, let's assume you have a mock flight data
    const mockFlightData = [
      { id: 1, departure: 'Airport A', destination: 'Airport B', date: '2023-08-20', price: 200 },
      { id: 2, departure: 'Airport C', destination: 'Airport D', date: '2023-08-21', price: 300 },
      // Add more mock flight data
    ];

    setSearchResults(mockFlightData);
  };

  const handleFlightSelect = (selectedFlight) => {
    // You can add your logic here to process the selected flight, such as redirecting to a booking page.
    console.log("Selected flight:", selectedFlight);
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Booking</h1>
      </header>
      <main>
        <section className="search">
          <h2>Search for Flights</h2>
          <form onSubmit={handleSearch}>
            <label htmlFor="departure">Departure:</label>
            <input type="text" id="departure" value={departure} onChange={(e) => setDeparture(e.target.value)} required />

            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required />

            <label htmlFor="departure-date">Departure Date:</label>
            <input type="date" id="departure-date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />

            <button className='btn' type="submit">Search</button>
          </form>
        </section>
        <section className="results">
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((flight) => (
              <li key={flight.id}>
                <h3>Flight to Destination</h3>
                <p>Departure: {flight.departure}</p>
                <p>Arrival: {flight.destination}</p>
                <p>Departure Date: {flight.date}</p>
                <p>Price: ${flight.price}</p>
                <button onClick={()=>handleFlightSelect(flight)} className='btn'>Select Flight</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Airline. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Address;


