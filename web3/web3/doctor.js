import {web3Instance} from'./web3.js';
import abiFile from "./doctorABI.json" assert{type:"json"};
const abi = abiFile;
const doctorContractAddress = '0x0038c3c0A31DF1E869974171865e8237EEDE4293';

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

  // returns the doctor object data 
  export async function getDoctorByUsername(username) {
    const contract = new web3.eth.Contract(abi, doctorContractAddress);
    try {
      const data = await contract.methods.getDoctorByUsername(username).call();
      console.log(data);
      return data;
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

  // test functions
  export async function testGetDoctorById() {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
      // create patient first
        const accounts = await web3Instance.eth.getAccounts();
        const doctorAccount = web3Instance.eth.accounts.create();
        console.log("Creating Doctor Account...");
        await contract.methods.createDoctor(doctorAccount.address, "username", "displayName", ['info'], ["123"]).send({from: accounts[0]});
        console.log('Doctor Account created successfully');

        // then try to retrieve it by id
        const data = await contract.methods.getDoctorById(doctorAccount.address).call();
        console.log(data);
    } catch (error) {
      console.error('Error retrieving doctor account:', error);
    }
  }

  export async function testGetDoctorByUsername() {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
      // create doctor first
        const accounts = await web3Instance.eth.getAccounts();
        const doctorAccount = web3Instance.eth.accounts.create();
        console.log("Creating Doctor Account...");
        await contract.methods.createDoctor(doctorAccount.address, "username", "displayName", ['info'], ["123"]).send({from: accounts[0]});
        console.log('Doctor Account created successfully');

        // then try to retrieve it by username
        const data = await contract.methods.getDoctorByUsername("testuser").call();
        console.log(data);
    } catch (error) {
      console.error('Error retrieving doctor account:', error);
    }
  }

  export async function testDeleteDoctor() {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
      // create patient first
        const accounts = await web3Instance.eth.getAccounts();
        const doctorAccount = web3Instance.eth.accounts.create();
        console.log("Creating Doctor Account...");
        await contract.methods.createDoctor(doctorAccount.address, "username", "displayName", ['info'], ["123"]).send({from: accounts[0]});
        console.log('Doctor Account created successfully');

        // then try to delete it
        await contract.methods.deleteDoctor(doctorAccount.address).call();
        console.log('Doctor account deleted successfully');
    } catch (error) {
      console.error('Error retrieving doctor account:', error);
    }
  }

  export async function testSingleAvailability() {
    const contract = new web3Instance.eth.Contract(abi, doctorContractAddress);
    try {
      // create a doctor
      const accounts = await web3Instance.eth.getAccounts();
      const doctorAccount = web3Instance.eth.accounts.create();
      console.log("Creating Doctor Account...");
      await contract.methods.createDoctor(doctorAccount.address, "username", "displayName", ['info'], ["123"]).send({from: accounts[0]});
      console.log('Doctor Account created successfully');

      // create an availability
      await contract.methods.createOneDoctorAvailability(doctorAccount.address, "234");
      console.log("Created one availability for Doc")

      // then try to delete it
      await contract.methods.deleteOneDoctorAvailability(doctorAccount.address, "123").call();
      console.log('Doctor availability deleted successfully');
    } catch (error) {
      console.error('Error retrieving doctor account:', error);
    }
  }

  

  
  