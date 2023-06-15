function classifyNumber(number) {
  if (Number.isInteger(number)) {
    return "Rational (Terminating)";
  } else if (Number.isFinite(number)) {
    return "Rational (Non-terminating Non-recurring)";
  } else {
    return "Irrational (Non-terminating Recurring)";
  }
}

console.log(classifyNumber(5, 2)); 
