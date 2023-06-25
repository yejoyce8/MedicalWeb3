// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Patient {
    struct PatientData {
        address id;
        string username;
        string displayName;
        string[] medicalInformation;
    }
    PatientData[] patients;

    event PatientCreated(
        address indexed id,
        string username,
        string displayName,
        string[] medicalInformation
    );

    event PatientUpdated(
        address indexed id,
        string username,
        string displayName,
        string[] medicalInformation
    );
    event PatientDeleted(address indexed id);

    function createPatient(
        address id,
        string memory _username,
        string memory _displayName,
        string[] memory _medicalInformation
    ) external {
        PatientData memory newPatient = PatientData(
            id,
            _username,
            _displayName,
            _medicalInformation
        );
        patients.push(newPatient);

        emit PatientCreated(id, _username, _displayName, _medicalInformation);
    }

    function getPatients() external view returns (PatientData[] memory) {
        return patients;
    }

    function getPatientCount() external view returns (uint256) {
        return patients.length;
    }

    function getPatientById(
        address _id
    ) external view returns (PatientData memory) {
        for (uint256 i = 0; i < patients.length; i++) {
            if (patients[i].id == _id) {
                return patients[i];
            }
        }
    }

    function updatePatient(
        address _id,
        string memory _username,
        string memory _displayName,
        string[] memory _medicalInformation
    ) external {
        for (uint256 i = 0; i < patients.length; i++) {
            if (patients[i].id == _id) {
                patients[i].username = _username;
                patients[i].displayName = _displayName;
                patients[i].medicalInformation = _medicalInformation;

                emit PatientUpdated(
                    _id,
                    _username,
                    _displayName,
                    _medicalInformation
                );
                break;
            }
        }
    }

    function deletePatient(address _id) external {
        for (uint256 i = 0; i < patients.length; i++) {
            if (patients[i].id == _id) {
                delete patients[i];
                emit PatientDeleted(_id);
                break;
            }
        }
    }
}
