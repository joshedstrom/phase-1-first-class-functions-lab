const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const firstTwo = drivers.slice(0,2);
const lastTwo = drivers.slice(-2);

function returnFirstTwoDrivers(){
    return firstTwo;
}

function returnLastTwoDrivers(){
    return lastTwo;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function() {
        return integer*integer;
    }
}
const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;

function selectDifferentDrivers(drivers, variable){
    if (variable === returnFirstTwoDrivers) {
        return firstTwo;
    }else if (variable === returnLastTwoDrivers){
        return lastTwo;
    }
}
