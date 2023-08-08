import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Grid,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Spinner,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const ModalWithSpinner = ({ isOpen, onClose }) => {
  const [showSpinner, setShowSpinner] = useState(true);
  const navigate = useNavigate();

//   const handleNavigate = ()=>{
//     navigate(`/hotels`)
//   }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
    
        <ModalBody
          display='flex'
          justifyContent='center'
          alignItems='center'
          bg={"#3199da"}
        >
        
          <img
            src='https://i.pinimg.com/originals/eb/70/7a/eb707ae7096cc8df384f1bf87dab547a.gif'
            alt=''
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const PlaceCard = () => {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/places")
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = debounce((value) => {
    setSearchTerm(value);
  }, 100);

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function handleDelete(newData) {
    const url = "http://localhost:8080/data/1";
    try {
      const response = await axios.delete(url);
      console.log("Data deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting data:", error.response.data);
    }

    try {
      await axios.post("http://localhost:8080/data", newData);
      console.log("Data stored successfully");
    } catch (error) {
      console.error("Error storing data:", error);
    }
  }

  const handleClick = async (place) => {
    const newData = {
      placeName: place.name,
      placePrice: place.price,
      placeImage: place.image,
      days: place.days,
      id: 1,
    };

    setIsModalOpen(true); 

    try {
      const response = await axios.get(
        "http://localhost:8080/data"
      );
      setData(response.data.length);
      console.log(data);
    } catch (error) {
      console.error("Error storing data:", error);
    }

    if (data !== null) {
      handleDelete(newData);
    }

    try {
      await axios.post("http://localhost:8080/data", newData);
      console.log("Data stored successfully");
    } catch (error) {
      console.error("Error storing data:", error);
    }

    setTimeout(() => {
      setIsModalOpen(false); 


    //   navigate(`/hotels`)
    }, 2000);
  };

  return (
    <Box bgColor={"#cceaf7"} marginTop={-40}>
      <Box bgColor={"#29335c"} h={160}></Box>
      <Heading
        pt={100}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        <Text as={"span"} color={"black"}>
          Search your destination
        </Text>


      </Heading>
      <Flex justifyContent={"center"}>
        <InputGroup mt={4} mb={6} w={600} size={"lg"}>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={FaSearch} color='gray.500' />}
          />
          <Input style = {{background : "orange" , color : "white"}}
            type='text'
            placeholder='Search by place name'
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
          />
        </InputGroup>
      </Flex>
      <Grid templateColumns='repeat(4, 1fr)' gap={10} p={5}>
        {filteredPlaces.map((place) => (
          <ChakraCard key={place.id} maxW='lg'>
            <Heading size='lg'>{place.desc}</Heading>
            <CardBody>
                <div style = {{display : "flex" ,   }}>
                <div>
                <Image src={place.image} alt={place.name} borderRadius='lg' width="90%" />
                </div>
                <div>
                <Stack mt='6' spacing='3'>
                <Heading size='lg'>{place.name}</Heading>
                <Text color='blue.600' fontSize='lg'>
                  Price per person: {place.price}
                </Text>
              </Stack>
                </div>
                </div>
                
            </CardBody>
            <Divider />
            <CardFooter >
              <ButtonGroup spacing='2'>
                <Button
                  variant='solid'
                  colorScheme='orange'
                //   onClick={handleNavigate}
                >
                  Book Now
                </Button>
              </ButtonGroup>
            </CardFooter>
          </ChakraCard>
        ))}
      </Grid>
      <ModalWithSpinner
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Box>
  );
};

export default PlaceCard;
