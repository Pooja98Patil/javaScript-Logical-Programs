// WAP to log the last character of the given strings using length property
//  “Hey, my friend, Programming Language”
//  “I am learning logical programs”
//  “Angular”

function lastCharecterOfstring (string){
   
    let lastChar = string.charAt(string.length-1)
    console.log(`The last character of the given strings is => ${lastChar}`)

}


lastCharecterOfstring("Hey, my friend, Programming Language");
lastCharecterOfstring("I am learning logical programs");
lastCharecterOfstring("Angular");

