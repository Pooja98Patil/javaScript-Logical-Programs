// Program to count character ‘a’: Define a function charCount( ) with one argument and 
// call this function by passing below strings one by one. This function must return the 
// char count.
// o “JavaScript”
// o “Do or Die”
// o “Learn with us, Job with us”
// o “Empowering Dreams, Guaranteeing Futures”
// o “Anny, My favorite fruit is Apple”


function charCount(str){

    console.log(`Given string is => ${str}`)
     let count = 0;
   

     for (let i = 0; i <= str.length; i++) {
         if (str.charAt(i).toLowerCase() === 'a') {
            count++;
 }
    }
console.log(`The count of "a" In the given string => ${count}`);
console.log(` `)

}

charCount("JavaScript");

charCount("Do or Die");
charCount("Learn with us, Job with us");
charCount("Empowering Dreams, Guaranteeing Futures");
charCount("Anny, My favorite fruit is Apple");


////second method using for of 
