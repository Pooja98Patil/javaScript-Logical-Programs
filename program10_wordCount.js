// 10. Program to count words: Define a function wordCount( ) with one argument and call 
// this function by passing below strings one by one. This function must return the word
// count that’s been passed as an argument.
// o “JavaScript The language of Internet”
// o “Enhance Your Learning Journey with Exclusive Add-ons”
// o “Beyond frameworks, Beyond Imagination”
// o “I am passionate software developer”


function wordCount(string){
    let word = string.split(" ");
    
    let result = word.length;

    console.log(`Number of words in the given string '${string}' => '${result}'`)
 }

 wordCount("JavaScript The language of Internet");
 wordCount("Enhance Your Learning Journey with Exclusive Add-ons");
 wordCount("Beyond frameworks, Beyond Imagination");
 wordCount("I am passionate software developer");
 