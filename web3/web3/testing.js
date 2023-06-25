// test
import { web3Instance } from "./web3.js";
import { createAppointment, getAppointments, getAppointmentsCount, getAppointmentsByDoctor, getAppointmentsByPatient, createAndRetrieveAppointments } from "./appointments.js";
import { createDoctor, deleteDoctorProfile,deleteOneDoctorAvailability, createDoctorAvailability, getDoctorById, getDoctors, getDoctorCount, getDoctorAvailability} from "./doctor.js";
import { getPatients, createPatient, getPatientCount,testGetPatientById,updatePatientProfile, deletePatientProfile, testGetPatientByUsername, testDeletePatient } from "./patient.js";



// createAppointment = works
document.querySelectorAll("button")[0].addEventListener("click", ()=>{ // will likely want to search for the patient's account based on their name - might need a profile contract
    globalPatientAccount = web3Instance.eth.accounts.create();
    globalDoctorAccount = web3Instance.eth.accounts.create();
    createAppointment(globalPatientAccount.address, globalDoctorAccount.address, "234245", "created");
  
  });

// getAppointments = works
  document.querySelectorAll("button")[1].addEventListener("click", ()=>{
    getAppointments();
  });
  
// getAppointmentsCount = works
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

  // deleteDoctorOneAvailability
  document.querySelectorAll("button")[8].addEventListener("click", ()=>{
    // create an appointment for good measure
    const doctorAccount = web3Instance.eth.accounts.create();
    const patientAccount = web3Instance.eth.accounts.create();
    createAppointment(patientAccount.address, doctorAccount.address, "123", "created");
    // then delete it
    deleteOneDoctorAvailability(doctorAccount.address, 0, "123");
  });

  // createDoctorAvailability
  document.querySelectorAll("button")[9].addEventListener("click", ()=>{
    const doctorAccount = web3Instance.eth.accounts.create();
    createDoctorAvailability(doctorAccount.address, "123");
  });


  // patient tests -------------------

// getPatients = works
  document.querySelectorAll("button")[10].addEventListener("click", ()=>{
    getPatients();
  });

  // getPatientCount = works
  document.querySelectorAll("button")[11].addEventListener("click", ()=>{
    getPatientCount();
  });

  // createPatient = works
  document.querySelectorAll("button")[12].addEventListener("click", ()=>{
    createPatient('patientuser', 'patientdisplay',["info"]);
  });

  // getPatientByid = works
   document.querySelectorAll("button")[13].addEventListener("click", ()=>{
    testGetPatientById(); 
  });

  // deletePatientProfile = works
  document.querySelectorAll("button")[14].addEventListener("click", ()=>{
    testDeletePatient();
  });

  // updatePatientProfile = works
  document.querySelectorAll("button")[15].addEventListener("click", ()=>{
    // create patient first
    const patientAccount = web3Instance.eth.accounts.create();
    createPatient("patientuser", "display",['medicalinfo'])
    // then update it
    updatePatientProfile(patientAccount.address, "updatedpatientuser", "updateddisplay", ["updatedmedinfo"]);
  });

    // getDoctorAvailability
    document.querySelectorAll("button")[16].addEventListener("click", ()=>{
      // create some availabilities first
      const doctorAccount = web3Instance.eth.accounts.create();
      createDoctorAvailability(doctorAccount.address, "123");
      // retrieve the availability
      getDoctorAvailability(doctorAccount.address);
    }); 

  // deleteAppointment = works
  document.querySelectorAll("button")[17].addEventListener("click", ()=>{
    // create an appointment first
    const patientAccount = web3Instance.eth.accounts.create();
    createPatient(patientAccount.address, "patient", "newdisplay")
    updatePatientProfile(patientAccount.address, "updatedpatientuser", "updateddisplay", ["updatedmedinfo"]);
  }); 

  // getAppointmentsByPatient and by doctor
  document.querySelectorAll("button")[18].addEventListener("click", ()=>{
    createAndRetrieveAppointments();

  });

  // getPatientByUsername = works
  document.querySelectorAll("button")[19].addEventListener("click", ()=>{
    testGetPatientByUsername();
  }); 
