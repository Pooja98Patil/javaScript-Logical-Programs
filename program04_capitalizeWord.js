// Write a function - capitalizeWord( ) with below string argument and invoke the same 
// function one by one for below string values.
//  “language of internet ”
//  “EloN musk – The tycoon of decade”
//  “My Life My Rule”
//  “logical programming question SET”


 function capitalWord(string){
     let result = string.toUpperCase();
     console.log(`Before the string is => ${string}`)
     console.log(`After => ${result}`);
     console.log(` `)
 }

 capitalWord("language of internet");
 capitalWord("EloN musk – The tycoon of decade");
 capitalWord("My Life My Rule");
 capitalWord("logical programming question SET")