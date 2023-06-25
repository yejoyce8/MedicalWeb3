// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Doctor {
    struct DoctorData {
        address id;
        string username;
        string displayName;
        string [] profileInfo;
        uint [] availableTimes; 
    }
    
    DoctorData[] public doctors;
    
    mapping(string => address) public doctorIdsByUsername;

    mapping(address => DoctorData) public doctorDataByAddress;
    
    event DoctorDataCreated(
        address indexed id,
        string username,
        string displayName, 
        string [] profileInfo,
        uint [] availableTimes
    );
    
    event DoctorDataUpdated(
        address indexed id,
        string username,
        string displayName,
        string[] profileInfo,
        uint [] availableTimes
    );
    event DoctorDataDeleted(address indexed id);

    function createDoctor(
        address id,
        string memory _username,
        string memory _displayName, 
        string [] memory _profileInfo,
        uint [] memory _availableTimes
    ) external {
        DoctorData memory newDoctor =
            DoctorData(id, _username, _displayName, _profileInfo, _availableTimes);
        doctors.push(newDoctor);
        doctorIdsByUsername[_username] = id;
        doctorDataByAddress[id] = newDoctor;

        emit DoctorDataCreated(id, _username, _displayName, _profileInfo, _availableTimes);
    }

    function getDoctors() external view returns (DoctorData[] memory) {
        return doctors;
    }

    function getDoctorCount() external view returns (uint256) {
        return doctors.length;
    }

    function getDoctorById(address _id) external view returns (DoctorData memory) {
        return doctorDataByAddress[_id];
    }

    function getDoctorByUsername(string memory _username) external view returns (DoctorData memory) {
        address doctorId = doctorIdsByUsername[_username];
        require(doctorId != address(0), "Doctor not found");
        return doctorDataByAddress[doctorId];
    }

   function updateDoctor(
        address _id,
        string memory _username,
        string memory _displayName,
        string[] memory _profileInfo,
        uint[] memory _availableTimes
    ) external {
        DoctorData storage doctor = doctorDataByAddress[_id];
        doctor.username = _username;
        doctor.displayName = _displayName;
        doctor.profileInfo = _profileInfo;
        doctor.availableTimes = _availableTimes;

        emit DoctorDataUpdated(_id, _username, _displayName, _profileInfo, _availableTimes);
    }

    function deleteDoctor(address _id) external {
        delete doctorDataByAddress[_id];
        emit DoctorDataDeleted(_id);
    }


    function deleteOneDoctorAvailability(address _doctor, uint256 _date) public {
        DoctorData storage doctor = doctorDataByAddress[_doctor];
        uint[] storage availableTimes = doctor.availableTimes;

        for (uint256 i = 0; i < availableTimes.length; i++) {
            if (availableTimes[i] == _date) {
                availableTimes[i] = availableTimes[availableTimes.length - 1];
                availableTimes.pop();
                break;
            }
        }

        emit DoctorDataUpdated(
            doctor.id,
            doctor.username,
            doctor.displayName,
            doctor.profileInfo,
            doctor.availableTimes
        );
    }

    function createOneDoctorAvailability(address _doctor, uint256 _date) public {
        DoctorData storage doctor = doctorDataByAddress[_doctor];
        doctor.availableTimes.push(_date);

        emit DoctorDataUpdated(
            doctor.id,
            doctor.username,
            doctor.displayName,
            doctor.profileInfo,
            doctor.availableTimes
        );
    }

    function createDoctorAvailability(address _doctor, uint[] memory times) public {
        DoctorData storage doctor = doctorDataByAddress[_doctor];
        for (uint i = 0; i < times.length; i++) {
            doctor.availableTimes.push(times[i]);
        }

        emit DoctorDataUpdated(
            doctor.id,
            doctor.username,
            doctor.displayName,
            doctor.profileInfo,
            doctor.availableTimes
        );

    }

    function deleteDoctorAvailability(address _doctor, uint[] memory times) public {
        DoctorData storage doctor = doctorDataByAddress[_doctor];
        uint[] storage availableTimes = doctor.availableTimes;

        for (uint i = 0; i < times.length; i++) {
            for (uint j = 0; j < availableTimes.length; j++) {
                if (availableTimes[j] == times[i]) {
                    availableTimes[j] = availableTimes[availableTimes.length - 1];
                    availableTimes.pop();
                    break;
                }
            }
        }

        emit DoctorDataUpdated(
            doctor.id,
            doctor.username,
            doctor.displayName,
            doctor.profileInfo,
            doctor.availableTimes
        );
    }

    function getDoctorAvailability(address _doctor) external view returns (uint[] memory) {
        DoctorData storage doctor = doctorDataByAddress[_doctor];
        return doctor.availableTimes;
    }

}

