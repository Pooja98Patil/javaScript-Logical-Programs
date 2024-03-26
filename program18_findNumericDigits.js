// Find the numeric digits: Write a program with function name digitCount() to count the 
// total number of numeric digits from the below strings. This function accepts the one 
// argument as a string.
// o Codemind2019
// o Twenty24
// o Bharath1947India

function digitCount(string){
 let digitCount = 0;
 for (let i = 0; i < string.length; i++) {
    if (/[0-9]/.test(string[i])) {
        digitCount++;
   }
    
 }
 
 console.log(`Total Number of numeric Digits Present in given string '${string}' is '${digitCount}'`)


}

digitCount("Codemind2019")
digitCount("Twenty24")
digitCount("Bharath1947India")


