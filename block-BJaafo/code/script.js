function fullName(firstName, lastName) {
return firstName + ' ' + lastName;
}

//Test 1
let result = fullName(`Aditya`, `Dhanraj`);
let expectedResult = `Aditya Dhanraj` ;
if(result !== expectedResult) {
    throw new Error(`${result} is not equal to ${expectedResult}`);
}
//Test 2
result = fullName(`Ashwani`, `Giri`);
expectedResult = `Ashwani Giri` ;
if(result !== expectedResult) {
    throw new Error(`${result} is not equal to ${expectedResult}`);
}
console.log(result);
//After making the first test fail, i can't see the output of the second test.




function calculateTotalAmount(amount = '0', taxRate = '.08') {
    return amount + (amount * taxRate);
}
//Test 1
result = calculateTotalAmount(100, .10);
expectedResult = 110 ;
if(result !== expectedResult) {
    throw new Error(`${result} is not equal to ${expectedResult}`);
}
//Test 2
result = calculateTotalAmount(100, .04);
expectedResult = 104 ;
if(result !== expectedResult) {
    throw new Error(`${result} is not equal to ${expectedResult}`);
}
console.log(result);
//After making the first test fail, i can't see the output of the second test.