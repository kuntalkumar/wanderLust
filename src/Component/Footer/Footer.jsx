import { Box, Flex, Text, Link, Stack, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("#559dbd", "#27496d")} // Matches the Navbar color or a darker shade for dark mode
      color={useColorModeValue("white", "#cceaf7")} // Contrasting text color
      mt={10}
      
    >
      <Flex
        as="footer"
        py={6}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <Text fontSize="lg" fontWeight="bold">
          Wander Lust
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align="center"
        >
          <Link href="/" _hover={{ textDecoration: "none", color: "teal.200" }}>
            About Us
          </Link>
          <Link href="/" _hover={{ textDecoration: "none", color: "teal.200" }}>
            Destinations
          </Link>
          <Link href="/" _hover={{ textDecoration: "none", color: "teal.200" }}>
            Blog
          </Link>
          <Link href="/" _hover={{ textDecoration: "none", color: "teal.200" }}>
            Contact
          </Link>
        </Stack>
      </Flex>
      <Box py={4} textAlign="center" borderTopWidth={1} borderColor={useColorModeValue("#cceaf7", "#3a506b")}>
        <Text fontSize="sm">© 2024 Wander Lust. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
