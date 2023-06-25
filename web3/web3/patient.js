import {web3Instance} from'./web3.js';
import abiFile from "./patientABI.json" assert{type:"json"};
const abi = abiFile;
const patientContractAddress = '0x297Cd66BDa2bE11F654455bC1664B4339670e150';


export async function createPatient(username, displayName, medicalInformation) {
    const contract = new web3Instance.eth.Contract(abi, patientContractAddress);
    try {
        const accounts = await web3Instance.eth.getAccounts();
        const patientAccount = web3Instance.eth.accounts.create();
        console.log("Creating Patient Account...");
        await contract.methods.createPatient(doctorAccount.address, username, displayName, medicalInformation).send({from: accounts[0]});
        console.log('Patient Account created successfully');
    } catch (error) {
      console.error('Error creating patient account:', error);
    }
}
  
  // implement the rest of crud and probably single crud given patient id/address
  export async function getPatientCount(){
    const contract = new web3Instance.eth.Contract(abi, patientContractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      const data = await contract.methods.getPatientCount().call({from: accounts[0]});
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  export async function getPatients() {
    const contract = new web3Instance.eth.Contract(abi, patientContractAddress);
    try {
      const accounts = await web3Instance.eth.getAccounts();
      const data = await contract.methods.getPatients().call({from: accounts[0]});
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  export async function getPatientById(_id) {
    const contract = new web3.eth.Contract(abi, patientContractAddress);
    try {
      const data = await contract.methods.getDoctorById(_id).call();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  export async function updatePatientProfile(_id, _username, _displayName, medicalInformation) {
    const contract = new web3Instance.eth.Contract(abi, patientContractAddress);
    try {
        await contract.methods.updatePatient(_id, _username, _displayName, medicalInformation).call();
        console.log('Patient account updated successfully');
    } catch (error) {
        console.error('Error: ', error)
    }
  }

  export async function deletePatientProfile(_id) {
    const contract = new web3Instance.eth.Contract(abi, patientContractAddress);
    try {
        await contract.methods.deletePatient(_id).call();
        console.log('Patient account deleted successfully');
    } catch (error) {
        console.error('Error: ', error)
    }
  }

 

  
  