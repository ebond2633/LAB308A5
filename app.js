//importing calculateTrip function from calculateTrip.js
import {budget,calculateTrip} from './calculateTrip.js';

// Comparing results 
const speedOptions = [55, 60, 75];
speedOptions.forEach(speed => {
    const result = calculateTrip(speed);
    console.log(`At ${speed} mph:`);
    console.log(`- Gallons of fuel needed: ${result.gallonsNeeded.toFixed(2)}`);
    console.log(`- Fuel cost: $${result.fuelCost.toFixed(2)}`);
    console.log(`- Trip duration: ${result.duration.toFixed(2)} hours\n`);
});

// Checking if budget is enough 
console.log("Will the budget be enough for each speed option?");
speedOptions.forEach(speed => {
    const result = calculateTrip(speed);
    const isBudgetEnough = result.fuelCost <= budget;
    console.log(`At ${speed} mph: ${isBudgetEnough ? "Yes" : "No"}`);
});