// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//TODO: add function
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
        address id,
        string memory _username,
        string memory _displayName, 
        string [] memory _profileInfo,
        uint [] memory _availableTimes
    ) external {
        DoctorData memory newDoctor =
            DoctorData(id, _username, _displayName, _profileInfo, _availableTimes);
        doctors.push(newDoctor);

        emit DoctorDataCreated(id, _username, _displayName, _profileInfo, _availableTimes);
    }

    function getDoctors() external view returns (DoctorData[] memory) {
        return doctors;
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

    function deleteOneDoctorAvailability(address _doctor, uint256 _date) public {
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

    function createOneDoctorAvailability(address _doctor, uint256 _date) public {
       for (uint i = 0; i < doctors.length; i++) {
            if (doctors[i].id == _doctor) {
                doctors[i].availableTimes.push(_date);
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

    function createDoctorAvailability(address _doctor, uint[] memory times) public {
        for (uint i = 0; i < doctors.length; i++) {
            if (doctors[i].id == _doctor) {
                for (uint j = 0; j < times.length; j++) {
                    doctors[i].availableTimes.push(times[j]);
                }
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

    function deleteDoctorAvailability(address _doctor, uint[] memory times) public {
    for (uint i = 0; i < doctors.length; i++) {
        if (doctors[i].id == _doctor) {
            for (uint j = 0; j < times.length; j++) {
                for (uint k = 0; k < doctors[i].availableTimes.length; k++) {
                    if (doctors[i].availableTimes[k] == times[j]) {
                        doctors[i].availableTimes[k] = doctors[i].availableTimes[doctors[i].availableTimes.length - 1];
                        doctors[i].availableTimes.pop();
                        break;
                    }
                }
            }
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

    function getDoctorAvailability(
        address _doctor
    ) external view returns (uint[] memory) {
        for (uint i = 0; i < doctors.length; i++) {
            if (doctors[i].id == _doctor) {
                return doctors[i].availableTimes;
            }
        }
    }

    function toAsciiString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        
        uint256 temp = value;
        uint256 digits;
        
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        
        bytes memory buffer = new bytes(digits);
        uint256 index = digits - 1;
        temp = value;
        
        while (temp != 0) {
            buffer[index--] = bytes1(uint8(48 + temp % 10));
            temp /= 10;
        }
        
        return string(buffer);
    }

}

