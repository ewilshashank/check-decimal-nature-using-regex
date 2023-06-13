function findDecimalNature(numerator, denominator){
    let quotient = numerator/denominator;
    let decimalPart = quotient.toString().charAt.split('.');

    if(!decimalPart){
        return "terminating";
    }else if(/^0+$/.test(decimalPart)){
        return "terminating non recurring";
    }else if(/^(\d+?)\1+$/.test(decimalPart)){
        if(decimalPart === 1){
            return "terminating Recurring";
        }else {
            return "non-terminating Recurring";
        }
    }else{
        return "non-terminating non-recurring";
    }
}

let numerator = 7;
let denominator = 6;

console.log(findDecimalNature(numerator, denominator));