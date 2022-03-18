// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {
    return (function(Number) {
        return fare * Number
    })
}

const fareDoubler = function(createFareMultiplier) {
    return (createFareMultiplier * 2)
}

const fareTripler =  function(createFareMultiplier) {
    return (createFareMultiplier * 3)
}

const selectDifferentDrivers = function(driverArray, driverSelect) {
    switch(driverSelect) {
        case returnFirstTwoDrivers:
            return returnFirstTwoDrivers(driverArray)
            break
        case returnLastTwoDrivers:
            return returnLastTwoDrivers(driverArray)
    }
        
}