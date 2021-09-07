// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs(42 - street);
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start-end) * 264;
}

function distanceFromHqInFeet(street){
    return distanceTravelledInFeet(0,distanceFromHqInBlocks(street));
}

function calculatesFarePrice(start, destination){
    let distanceTraveled = distanceTravelledInFeet(start, destination);
    if( distanceTraveled <=400){
        return 0;}
    else if(distanceTraveled > 2500){
        return "cannot travel that far";}
    else if (distanceTraveled > 2000){
        return 25;}
    else{
        return 0.02*(distanceTraveled-400);}
}

