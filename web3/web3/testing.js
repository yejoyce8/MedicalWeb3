// test
import { web3Instance } from "./web3.js";
import { createAppointment, getAppointments, getAppointmentsCount } from "./appointments.js";
import { createDoctor, deleteDoctorProfile, deleteDoctorAvailability, createDoctorAvailability, getDoctorById, getDoctors, getDoctorCount} from "./doctor.js";
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


  // doctor test -------------------
 
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
   document.querySelectorAll("button")[4].addEventListener("click", ()=>{
    
    getDoctorById();
  });

  // deleteDoctorProfile
  document.querySelectorAll("button")[6].addEventListener("click", ()=>{
    createDoctor('doctorusername', 'doctordisplayname', [something, something]);
  });

  // deleteDoctorAvailability
  document.querySelectorAll("button")[3].addEventListener("click", ()=>{
    createDoctor();
  });

  // createDoctorAvailability
  document.querySelectorAll("button")[3].addEventListener("click", ()=>{
    createDoctor();
  });



