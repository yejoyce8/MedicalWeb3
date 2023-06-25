import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
} from "@chakra-ui/react";
import { FaUserAlt, FaBookMedical } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaMedical = chakra(FaBookMedical);

const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [healthCard, setHealthCare] = useState("");

  const onSignupClick = async () => {
    const medicalInformation = [];
    console.log("username", username);
    console.log("name", name);
    console.log("weight", weight);
    console.log("height", height);
    console.log("healthCard", healthCard);
    medicalInformation.push(weight);
    medicalInformation.push(height);
    medicalInformation.push(healthCard);

    //createPatient(username, name, medicalInformation).then(() => {
    //  return <Navigate to="/" />;
    //});
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {/* insert ethercare banner here */}
        <Avatar bg="blue.100" />
        <Heading textStyle="heading1" color="#569AFF">
          Welcome to EtherCare
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    value={username}
                    type="name"
                    placeholder="user name"
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    value={name}
                    placeholder="name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaMedical color="gray.300" />}
                  />
                  <Input
                    value={weight}
                    type="number"
                    placeholder="enter weight in kg"
                    onChange={(event) => setWeight(event.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaMedical color="gray.300" />}
                  />
                  <Input
                    value={height}
                    type="number"
                    placeholder="enter height in cm"
                    onChange={(event) => setHeight(event.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaMedical color="gray.300" />}
                  />
                  <Input
                    value={healthCard}
                    type="number"
                    placeholder="enter your health card number"
                    onChange={(event) => setHealthCare(event.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <Button
                borderRadius={0}
                variant="solid"
                color="white"
                bg="blue.100"
                width="full"
                onClick={onSignupClick}
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Have an account?{" "}
        <Link to="/login" style={{ color: "#569AFF" }}>
          Log in
        </Link>
      </Box>
    </Flex>
  );
};

export default Signup;
