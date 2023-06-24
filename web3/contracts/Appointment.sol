// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Appointment {
    struct AppointmentData {
        address patient;
        address doctor;
        uint256 date;
        string details;
    }

    AppointmentData[] public appointments;

    event AppointmentCreated(
        address indexed patient,
        address indexed doctor,
        uint256 indexed date,
        string details
    );

    function createAppointment(
        address _patient,
        address _doctor,
        uint256 _date,
        string memory _details
    ) external {
        AppointmentData memory newAppointment =
            AppointmentData(_patient, _doctor, _date, _details);
        appointments.push(newAppointment);

        emit AppointmentCreated(_patient, _doctor, _date, _details);
    }

    function getAppointmentsCount() external view returns (uint256) {
        return appointments.length;
    }

    function getAppointments() external view returns (AppointmentData[] memory) {
        return appointments;
    }
}