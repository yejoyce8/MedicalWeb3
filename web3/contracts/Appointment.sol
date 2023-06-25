// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Doctor.sol";

contract Appointment {
    uint idCounter;
    struct AppointmentData {
        uint id;
        address patient;
        address doctor;
        uint256 date;
        string details;
    }

    AppointmentData[] public appointments;

    // events
    event AppointmentCreated(
        uint indexed id,
        address indexed patient,
        address indexed doctor,
        uint256 date,
        string details
    );

   

    event AppointmentDataDeleted(uint indexed id);

    // CRUD
    function getId() internal returns(uint) { return ++idCounter; }

    function createAppointment(
        address _patient,
        address _doctor,
        uint256 _date,
        string memory _details
    ) external {
        uint id = getId();
        AppointmentData memory newAppointment =
            AppointmentData(id, _patient, _doctor, _date, _details);
        appointments.push(newAppointment);

        emit AppointmentCreated(id, _patient, _doctor, _date, _details);
    }

    function getAppointmentsCount() external view returns (uint256) {
        return appointments.length;
    }

    function getAppointments() external view returns (AppointmentData[] memory) {
        return appointments;
    }

   function getAppointmentsByPatient(address _patient) external view returns (AppointmentData[] memory) {
    uint count = 0;
    for (uint i = 0; i < appointments.length; i++) {
        if (appointments[i].patient == _patient) {
            count++;
        }
    }

    AppointmentData[] memory filteredAppointments = new AppointmentData[](count);
    uint filteredCount = 0;

    for (uint i = 0; i < appointments.length; i++) {
        if (appointments[i].patient == _patient) {
            filteredAppointments[filteredCount] = appointments[i];
            filteredCount++;
        }
    }

    return filteredAppointments;
}

function getAppointmentsByDoctor(address _doctor) external view returns (AppointmentData[] memory) {
    uint count = 0;
    for (uint i = 0; i < appointments.length; i++) {
        if (appointments[i].doctor == _doctor) {
            count++;
        }
    }

    AppointmentData[] memory filteredAppointments = new AppointmentData[](count);
    uint filteredCount = 0;

    for (uint i = 0; i < appointments.length; i++) {
        if (appointments[i].doctor == _doctor) {
            filteredAppointments[filteredCount] = appointments[i];
            filteredCount++;
        }
    }

    return filteredAppointments;
}

       
     // make sure to update doctor availability after deleting appt - functionality ocming soon lmfao 
    function deleteAppointment(uint _id) external {
        bool appointmentExists = false;
        for (uint i = 0; i < appointments.length; i++) {
            if (appointments[i].id == _id) {
                // Swap the matching appointment with the last appointment
                appointments[i] = appointments[appointments.length - 1];
                // Pop the last appointment
                appointments.pop();
                appointmentExists = true;
                break;
            }
        }

        require(appointmentExists, "Appointment does not exist.");

        emit AppointmentDataDeleted(_id);
    }


}

