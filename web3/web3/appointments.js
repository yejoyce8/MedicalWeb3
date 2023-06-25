import {web3Instance} from'./web3.js';
import abiFile from "./appointmentsABI.json" assert{type:"json"};
const abi = abiFile;
const contractAddress = '0xF7586bac72e17de70dEB7a085c14b71C796Fcee4';

// to work: 
// download metamask ext
// choose network to be test network goreli (show)
// live server, go live (share http://127.0.0.1:5500/)
// make sure you have ETH (or use my account)
// make sure to deploy injected provider on remix and fix addresses

// to make changes to the smart contract:
  // each time you change the smart contract

  // patient: address
  // doctor: address
  // date: int
  // details: string
  export async function createAppointment(patient, doctor, date, details) {
    const contract = new web3Instance.eth.Contract(abi, contractAddress);
    try {
        const accounts = await web3Instance.eth.getAccounts();
        console.log("Creating Appointment...");
        // when we call this we need to delete the time availability of doctor
        await contract.methods.createAppointment(patient, doctor, date, details).send({from: accounts[0]});
        console.log('Appointment created successfully');
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  }

  // implement the rest of crud and probably single crud given patient id/address
  export async function getAppointmentsCount(){
    const contract = new web3Instance.eth.Contract(abi, contractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      console.log(accounts);
      const data = await contract.methods.getAppointmentsCount().call({from: accounts[0]});
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  export async function getAppointments() {
    const contract = new web3Instance.eth.Contract(abi, contractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      const data = await contract.methods.getAppointments().call({from: accounts[0]});
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  export async function getAppointmentsByPatient(patientAccount) {
    const contract = new web3Instance.eth.Contract(abi, contractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      const data = await contract.methods.getAppointmentsByPatient(patientAccount).call({from: accounts[0]});
      console.log("getappointmentsbypatient:",data);
    } catch (error) {
      console.error('Error:', error);
    } 
  }

  export async function getAppointmentsByDoctor(doctorAccount) {
    const contract = new web3Instance.eth.Contract(abi, contractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      const data = await contract.methods.getAppointmentsByDoctor(doctorAccount).call({from: accounts[0]});
      console.log("getappointmentsbydoctor:",data);
    } catch (error) {
      console.error('Error:', error);
    } 
  }

  export async function deleteAppointment(id) {
    const contract = new web3Instance.eth.Contract(abi, contractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      const data = await contract.methods.deleteAppointment(id).call({from: accounts[0]});
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  export async function createAndRetrieveAppointments() {
    const patientAccount = web3Instance.eth.accounts.create();
    const doctorAccount = web3Instance.eth.accounts.create();
    try {
      // Create the appointment transaction
      await createAppointment(patientAccount.address, doctorAccount.address, "234245", "created");
  
      // Transaction completed, now retrieve the appointments
      await getAppointmentsByPatient(patientAccount.address);
      await getAppointmentsByDoctor(doctorAccount.address);
  
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
  

 