import React, {useState,ChangeEvent} from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css"



/**
 * This page is used to create a new appointment
 */

interface ApptBookingFormProps {
  id: number;
}
//{ patientId }: ApptBookingFormProps

const ApptBookingForm = (): React.ReactElement => {
  //sets information
  const [details, setDetails] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const [date, setDate] = useState<Date|null>(new Date());
  const [epochDate, setEpochDate] = useState<number | null>(null);

  //func to call when the user schedules
  const handleSchedule = () => {
    console.log('details', details);
    console.log('doctor', doctor);
    console.log('date', date);
    //NOTE: when we send date to the function, we want to increase it by one day
    console.log('epochDate',epochDate);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate);

    const epochTime = selectedDate.getTime();
    setEpochDate(epochTime);
  };



  return (
    <Box display="flex" flexDirection="column" m="0px auto" w="70%">
      <Heading size="lg">Book Appointment</Heading>
      
      <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="space-between"
      p="10px"
      mt="20px">

        <Box w="47%">
          <Box display="flex" flexDirection="row" mb="10px">
              <Heading size="sm">Select your doctor</Heading>
              <Text color="red" ml={1} mt={-3} fontSize="1.5em">
                *
              </Text>
          </Box>
          <Select 
           placeholder='Select doctor'
           value={doctor}
           onChange={(event) => setDoctor(event.target.value)}
                  
          >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
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
      mt="20px">
        <Box w="47%"> 
          <Box display="flex" flexDirection="row" mb="10px">
                <Heading size="sm">Date</Heading>
                <Text color="red" ml={1} mt={-3} fontSize="1.5em">
                  *
                </Text>
            </Box>
            <input type="date" 
            style={{
              borderWidth: '0.5px',
              borderStyle: 'solid',
              borderColor: '#CDD5Df',
              borderRadius: '4px',
              padding: '8px',
            }}
            value = {date ? date.toISOString().split('T')[0] : ''}
            onChange={handleDateChange}/>
        </Box>
        
      </Box>
      <Button
              colorScheme="teal"
              bg="#0EBCBD"
              variant="solid"
              onClick={handleSchedule}
            >
              Confirm my appointment
        </Button>
    </Box>
    

    
  
  );
};

export default ApptBookingForm;
