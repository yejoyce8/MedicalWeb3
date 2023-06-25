import {web3Instance} from'./web3.js';
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
      const data = await contract.methods.getDoctorCount().call({from: accounts[0]});
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  export async function getDoctors() {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      const data = await contract.methods.getDoctors().call({from: accounts[0]});
      console.log(data);
      return data;
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


  export async function deleteOneDoctorAvailability(_id, date) {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
        await contract.methods.deleteOneDoctorAvailability(_id, date).call();
        console.log('Doctor availability updated successfully');
    } catch (error) {
        console.error('Error: ', error)
    }
  }

  export async function createOneDoctorAvailability(_id, date) {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
        await contract.methods.createOneDoctorAvailability(_id, date).call();
        console.log('Doctor availability updated successfully');
    } catch (error) {
        console.error('Error: ', error)
    }
  }

  export async function createDoctorAvailability(_id, dates) {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
        await contract.methods.createDoctorAvailability(_id, dates).call();
        console.log('Doctor availability updated successfully');
    } catch (error) {
        console.error('Error: ', error)
    }
  }

  export async function getDoctorAvailability(_id) {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
        const data = await contract.methods.getDoctorAvailability(_id).call();
        console.log('Doctor availability got successfully');
        return data;
    } catch (error) {
        console.error('Error: ', error)
    }
  }
  
  