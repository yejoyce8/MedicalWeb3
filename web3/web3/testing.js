// test
import { web3Instance } from "./web3.js";
import { createAppointment, getAppointments, getAppointmentsCount } from "./appointments.js";
import { createDoctor, deleteDoctorProfile, deleteDoctorAvailability, createDoctorAvailability, getDoctorById, getDoctors, getDoctorCount, getDoctorAvailability} from "./doctor.js";
import { getPatients, createPatient, getPatientCount,getPatientById,updatePatientProfile, deletePatientProfile } from "./patient.js";

// createAppointment
document.querySelectorAll("button")[0].addEventListener("click", ()=>{ // will likely want to search for the patient's account based on their name - might need a profile contract
    const patientAccount = web3Instance.eth.accounts.create();
    const doctorAccount = web3Instance.eth.accounts.create();
    createAppointment(patientAccount.address, doctorAccount.address, "234245", "created");
  
  });

// getAppointments  
  document.querySelectorAll("button")[1].addEventListener("click", ()=>{
    getAppointments();
  });
  
// getAppointmentsCount
  document.querySelectorAll("button")[2].addEventListener("click", ()=>{
    getAppointmentsCount();
  });


  // doctor tests -------------------
 
  document.querySelectorAll("button")[3].addEventListener("click", ()=>{
    getDoctors();
  });

  document.querySelectorAll("button")[4].addEventListener("click", ()=>{
    getDoctorCount();
  });

  // createDoctor
  document.querySelectorAll("button")[5].addEventListener("click", ()=>{
    createDoctor('docuser', 'docdisplay',["info"], ["3589827944"]);
  });

  // get doctorbyid
   document.querySelectorAll("button")[6].addEventListener("click", ()=>{
    const doctorAccount = web3Instance.eth.accounts.create();
    getDoctorById(doctorAccount.address);
  });

  // deleteDoctorProfile
  document.querySelectorAll("button")[7].addEventListener("click", ()=>{
    const doctorAccount = web3Instance.eth.accounts.create();
    deleteDoctorProfile(doctorAccount.address);
  });

  // deleteDoctorAvailability
  document.querySelectorAll("button")[8].addEventListener("click", ()=>{
    // create an appointment for good measure
    const doctorAccount = web3Instance.eth.accounts.create();
    const patientAccount = web3Instance.eth.accounts.create();
    createAppointment(patientAccount.address, doctorAccount.address, "123", "created");
    // then delete it
    deleteDoctorAvailability(doctorAccount.address, 0, "123");
  });

  // createDoctorAvailability
  document.querySelectorAll("button")[9].addEventListener("click", ()=>{
    const doctorAccount = web3Instance.eth.accounts.create();
    createDoctorAvailability(doctorAccount.address, "123");
  });

  // getDoctorAvailability
  document.querySelectorAll("button")[16].addEventListener("click", ()=>{
    // create some availabilities first
    const doctorAccount = web3Instance.eth.accounts.create();
    createDoctorAvailability(doctorAccount.address, "123");
    // retrieve the availability
    getDoctorAvailability(doctorAccount.address);
  }); 


  // patient tests -------------------

// getPatients
  document.querySelectorAll("button")[10].addEventListener("click", ()=>{
    getPatients();
  });

  document.querySelectorAll("button")[11].addEventListener("click", ()=>{
    getPatientCount();
  });

  // createPatient
  document.querySelectorAll("button")[12].addEventListener("click", ()=>{
    createPatient('patientuser', 'patientdisplay',["info"]);
  });

  // getPatientByid
   document.querySelectorAll("button")[13].addEventListener("click", ()=>{
    const patientAccount = web3Instance.eth.accounts.create();
    getPatientById(patientAccount.address);
  });

  // deletePatientProfile
  document.querySelectorAll("button")[14].addEventListener("click", ()=>{
    const patientAccount = web3Instance.eth.accounts.create();
    deletePatientProfile(patientAccount.address);
  });

  // updatePatientProfile
  document.querySelectorAll("button")[15].addEventListener("click", ()=>{
    // create patient first
    const patientAccount = web3Instance.eth.accounts.create();
    createPatient(patientAccount.address, "patient", "display", ["medinfo"]);
    // update it
    updatePatientProfile(patientAccount.address, "updatedpatientuser", "updateddisplay", ["updatedmedinfo"]);
  });



