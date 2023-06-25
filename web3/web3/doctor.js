import {web3Instance, abi, doctorContractAddress} from'./web3.js';
// import abi
// import doctordoctorContractAddress
// import appointmentdoctorContractAddress
import { deleteAppointment } from './appointments.js';

export async function createDoctor(username, displayName, profileInfo, availableTimes) {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
        const accounts = await web3Instance.eth.getAccounts();
        const doctorAccount = web3Instance.eth.accounts.create();
        console.log("Creating Doctor Account...");
        await contract.methods.createDoctor(doctorAccount.address, username, displayName, profileInfo, availableTimes).send({from: accounts[0]});
        console.log('Doctor Account created successfully');
    } catch (error) {
      console.error('Error creating doctor account:', error);
    }
}
  
  // implement the rest of crud and probably single crud given patient id/address
  export async function getDoctorCount(){
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      const data = await contract.methods.getAppointmentsCount().call({from: accounts[0]});
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  export async function getDoctors() {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      const data = await contract.methods.getAppointments().call({from: accounts[0]});
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  export async function getDoctorById(_id) {
    const contract = new web3.eth.Contract(abi, doctorContractAddress);
    try {
      const doctorData = await contract.methods.getDoctorById(_id).call();
      return doctorData;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  export async function updateDoctorProfile(_id, _username, _displayName, _profileInfo, _availableTimes) {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
        await contract.methods.updateDoctor(_id, _username, _displayName, _profileInfo, _availableTimes).call();
        console.log('Doctor account updated successfully');
    } catch (error) {
        console.error('Error: ', error)
    }
  }

  export async function deleteDoctorProfile(_id) {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
        await contract.methods.deleteDoctor(_id).call();
        console.log('Doctor account deleted successfully');
    } catch (error) {
        console.error('Error: ', error)
    }
  }

  export async function deleteDoctorAvailability(_id, appointmentId, date) {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
        await contract.methods.deleteDoctorAvailability(_id, date).call();
        console.log('Doctor availability updated successfully');
        await deleteAppointment(appointmentId);
        console.log('Doctor availability deleted successfully');
    } catch (error) {
        console.error('Error: ', error)
    }
  }

  export async function createDoctorAvailability(_id, date) {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
        await contract.methods.createDoctorAvailability(_id, date).call();
        console.log('Doctor availability updated successfully');
    } catch (error) {
        console.error('Error: ', error)
    }
  }

  
  