const returnFirstTwoDrivers = function (drivers){
return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1,){
    return charge => charge * num1; 
}
const fareDoubler = (charge) => {return charge * 2}; 

const fareTripler = (charge) => {return charge * 3};

const selectDifferentDrivers = (returnFirstTwoDrivers, returnLastTwoDrivers) => {return returnLastTwoDrivers(returnFirstTwoDrivers)};
