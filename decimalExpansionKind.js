//there is the error in the code this is still not working i don't know the error


function findDecimalNature(numerator, denominator) {
  let quotient = numerator / denominator;
  let decimalPart = quotient.toString().split('.')[1]; 

  if (!decimalPart) {
    return "terminating";
  } else if (/^0+$/.test(decimalPart)) {
    return "terminating non-recurring"; 
  } else if (/^(\d+?)\1+$/.test(decimalPart)) {
    if (parseInt(decimalPart) === 0) { 
      return "terminating recurring"; 
    } else {
      return "non-terminating recurring"; 
    }
  } else {
    return "non-terminating non-recurring"; 
  }
}

let numerator = 7;
let denominator = 6;

console.log(findDecimalNature(numerator, denominator));
