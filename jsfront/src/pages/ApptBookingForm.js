import React, { useState } from "react";
import { Box, Button, Heading, Input, Select, Text } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./Navbar";
/**
 * This page is used to create a new appointment
 */

//{ patientId }: ApptBookingFormProps

const ApptBookingForm = () => {
  //sets information
  const [details, setDetails] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState(new Date());
  const [epochDate, setEpochDate] = useState(null);

  //const [doctorOptions, setDoctorOptions] = useState<Book[]>([]);

  //func to call when the user schedules
  const handleSchedule = () => {
    console.log("details", details);
    console.log("doctor", doctor);
    console.log("date", date);
    //NOTE: when we send date to the function, we want to increase it by one day
    console.log("epochDate", epochDate);
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);

    const epochTime = selectedDate.getTime();
    setEpochDate(epochTime);
  };

  return (
    <Box>
      <NavBar />
      <Box
        style={{ paddingTop: "20px" }}
        display="flex"
        flexDirection="column"
        m="0px auto"
        w="70%"
      >
        <Heading
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
          textStyle="heading1"
          size="lg"
        >
          Book Appointment
        </Heading>
        <Box bg="#F5F5F5" borderRadius="40px" p="20px">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
            p="10px"
            mt="20px"
          >
            <Box w="47%">
              <Box display="flex" flexDirection="row" mb="10px">
                <Heading size="sm">Select your doctor</Heading>
                <Text color="red" ml={1} mt={-3} fontSize="1.5em">
                  *
                </Text>
              </Box>
              <Select
                placeholder="Select doctor"
                textStyle="body"
                value={doctor}
                onChange={(event) => setDoctor(event.target.value)}
                style={{ color: "gray.600" }}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box w="47%">
              <Box display="flex" flexDirection="row" mb="10px">
                <Heading size="sm">Details</Heading>
                <Text color="red" ml={1} mt={-3} fontSize="1.5em">
                  *
                </Text>
              </Box>
              <Input
                textStyle="body"
                placeholder="Details about your appointment"
                value={details}
                onChange={(event) => setDetails(event.target.value)}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
            p="10px"
            mt="20px"
          >
            <Box w="47%" pb="20px">
              <Box display="flex" flexDirection="row" mb="10px">
                <Heading size="sm">Date</Heading>
                <Text color="red" ml={1} mt={-3} fontSize="1.5em">
                  *
                </Text>
              </Box>
              <input
                type="date"
                style={{
                  borderWidth: "0.5px",
                  borderStyle: "solid",
                  borderColor: "#CDD5Df",
                  borderRadius: "4px",
                  padding: "8px",
                  backgroundColor: "#F5F5F5",
                  width: "460px",
                }}
                value={date ? date.toISOString().split("T")[0] : ""}
                onChange={handleDateChange}
              />
            </Box>
            <Box w="47%">
              <Box display="flex" flexDirection="row" mb="10px">
                <Heading size="sm">Select appointment time</Heading>
                <Text color="red" ml={1} mt={-3} fontSize="1.5em">
                  *
                </Text>
              </Box>
              <Select
                placeholder="Select Vacant Times"
                textStyle="body"
                value={doctor}
                onChange={(event) => setDoctor(event.target.value)}
                style={{ color: "gray.600" }}
              >
                <option value="option1">Time 1</option>
                <option value="option2">Time 2</option>
                <option value="option3">TIme 3</option>
              </Select>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            p="10px"
            mt="20px"
          >
            <Button
              colorScheme="blue"
              bg="blue.100"
              variant="solid"
              onClick={handleSchedule}
              marginRight="10px"
            >
              Confirm my appointment
            </Button>
            <Button
              colorScheme="blue"
              bg="blue.100"
              variant="solid"
              onClick={() => window.location.assign("/")}
              marginLeft="10px"
            >
              Cancel
            </Button>
          </Box>
        </Box>
        {/* Doctor Information */}
        <Heading style={{ paddingTop: "40px" }} textStyle="heading1" size="lg">
          Doctor's Information
        </Heading>
      </Box>
    </Box>
  );
};

export default ApptBookingForm;
