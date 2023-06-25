import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import NavBar from "./Navbar";

/**
 * This page is used to create a new Review
 */
const Home = () => {
  return (
    <Box>
      <NavBar/>
      <Center>
        <Stack w="80%" mb="40">
          <Flex mt="10" mb="25">
            <Text textStyle="heading1">Hello Name</Text>
            <Spacer />
            <Button
              w="159px"
              h="48px"
              bg="blue.100"
              colorScheme="blue.100"
              marginTop="20px"
              onClick={() => window.location.assign("/appt-book")}
            >
              + Add review
            </Button>
          </Flex>
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th fontSize="xl">Time</Th>
                  <Th fontSize="xl">Doctor</Th>
                  <Th fontSize="xl">Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Center>
    </Box>
  );
};

export default Home;
