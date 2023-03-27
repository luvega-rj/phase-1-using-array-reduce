
// Code your solution here
// Create a variable called totalBatteries and assign it the result of using the reduce() method on the batteryBatches array
// The reduce() method will iterate through each element in the array and perform a sum operation on them, resulting in a single aggregate value
// This aggregate value is then stored in totalBatteries, representing the total number of batteries assembled across all batches. 

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);

console.log(totalBatteries); // Output: 31
