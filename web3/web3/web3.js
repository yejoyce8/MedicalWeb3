import abiFile from "./abi.json" assert{type:"json"};
let web3Instance;
const abi = abiFile;
const contractAddress = '0x3B0E42ec826aaEc9f51fd621C5ceDAe47f9e1e08';
window.onload = async ()=>{
  console.log("running");
  if(window.ethereum){
    web3Instance = new Web3(window.ethereum);
    try{
      await ethereum.enable();
      console.log("ethereum enabled");
      

    }catch(err){
      console.log(err);
    }
  }
};
// to work: 
// download metamask ext
// choose network to be test network goreli (show)
// live server, go live (share http://127.0.0.1:5500/)
// make sure you have ETH (or use my account)
// make sure to deploy injected provider on remix and fix addresses
export async function createAppointment(patient, doctor, date, details) {
  var processing = false;
  const contract = new web3Instance.eth.Contract(abi, contractAddress);
  try {
      const accounts = await web3Instance.eth.getAccounts();
      console.log("Creating Appointment...");
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

// test
document.querySelectorAll("button")[0].addEventListener("click", ()=>{ // will likely want to search for the patient's account based on their name - might need a profile contract
  const patientAccount = web3Instance.eth.accounts.create();
  const doctorAccount = web3Instance.eth.accounts.create();
  createAppointment(patientAccount.address, doctorAccount.address, "2334", "created");

});

document.querySelectorAll("button")[1].addEventListener("click", ()=>{
  getAppointments();
});

document.querySelectorAll("button")[2].addEventListener("click", ()=>{
  getAppointmentsCount();
});