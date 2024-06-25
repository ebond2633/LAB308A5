//Planning a cross-country road trip! 
// Constants
const distance = 1500; // total  distance in miles
const fuelPrices = 3; // cost of fuel per gallon i
export const budget = 175; // fuel budget 

// Function to calculate fuel 
export function calculateTrip(speed) {
    let fuelEfficiency;
    if (speed === 55) {
        fuelEfficiency = 30; // miles per gallon at 55 mph
    } else if (speed === 60) {
        fuelEfficiency = 28; // miles per gallon at 60 mph
    } else if (speed === 75) {
        fuelEfficiency = 23; // miles per gallon at 75 mph
    } else {
        return "Invalid speed";
    }

    const gallonsNeeded = distance / fuelEfficiency;
    const fuelCost = gallonsNeeded * fuelPrices;
    const duration = distance / speed;

    return { gallonsNeeded, fuelCost, duration };
}