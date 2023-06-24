// test
import { web3Instance } from "./web3.js";
import { createAppointment, getAppointments, getAppointmentsCount } from "./appointments.js";
document.querySelectorAll("button")[0].addEventListener("click", ()=>{ // will likely want to search for the patient's account based on their name - might need a profile contract
    const patientAccount = web3Instance.eth.accounts.create();
    const doctorAccount = web3Instance.eth.accounts.create();
    createAppointment(patientAccount.address, doctorAccount.address, "234245", "created");
  
  });
  
  document.querySelectorAll("button")[1].addEventListener("click", ()=>{
    getAppointments();
  });
  
  document.querySelectorAll("button")[2].addEventListener("click", ()=>{
    getAppointmentsCount();
  });
  