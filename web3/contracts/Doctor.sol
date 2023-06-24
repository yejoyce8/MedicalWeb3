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
    DoctorData[] doctors;
    
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
        address _id,
        string memory _username,
        string memory _displayName, 
        string [] memory _profileInfo,
        uint [] memory _availableTimes
    ) external {
        DoctorData memory newDoctor =
            DoctorData(_id, _username, _displayName, _profileInfo, _availableTimes);
        doctors.push(newDoctor);

        emit DoctorDataCreated(_id, _username, _displayName, _profileInfo, _availableTimes);
    }

    function getDoctorCount() external view returns (uint256) {
        return doctors.length;
    }

    function getDoctorById(address _id) external view returns (DoctorData memory) {
        for (uint256 i = 0; i < doctors.length; i++) {
            if (doctors[i].id == _id) {
                return doctors[i];
            }
        }
    }

    function updateDoctor(
        address _id,
        string memory _username,
        string memory _displayName,
        string[] memory _profileInfo,
        uint [] memory _availableTimes
    ) external {
        for (uint256 i = 0; i < doctors.length; i++) {
            if (doctors[i].id == _id) {
                doctors[i].username = _username;
                doctors[i].displayName = _displayName;
                doctors[i].profileInfo = _profileInfo;
                doctors[i].availableTimes = _availableTimes;

                emit DoctorDataUpdated(
                    _id,
                    _username,
                    _displayName,
                    _profileInfo,
                    _availableTimes
                );
                break;
            }
        }
    }

    function deleteDoctor(address _id) external {
        for (uint256 i = 0; i < doctors.length; i++) {
            if (doctors[i].id == _id) {
                delete doctors[i];
                emit DoctorDataDeleted(_id);
                break;
            }
        }
    }

    function updateDoctorAvailability(address _doctor, uint256 _date) public {
    for (uint i = 0; i < doctors.length; i++) {
        if (doctors[i].id == _doctor) {
            uint[] memory updatedAvailability = new uint[](doctors[i].availableTimes.length);
            uint count = 0;
            for (uint j = 0; j < doctors[i].availableTimes.length; j++) {
                if (doctors[i].availableTimes[j] != _date) {
                    updatedAvailability[count] = doctors[i].availableTimes[j];
                    count++;
                }
            }
            doctors[i].availableTimes = updatedAvailability;

            emit DoctorDataUpdated(
                doctors[i].id,
                doctors[i].username,
                doctors[i].displayName,
                doctors[i].profileInfo,
                doctors[i].availableTimes
            );
                break;
            }
        }
    }

}