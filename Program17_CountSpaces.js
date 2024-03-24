// 17. Count spaces: Write a function spaceCount( ), which should count the total number 
// spaces that is available in the string. This function should accept the one argument and 
// return the total number of spaces.
// o “Revision is the mother of success”
// o “Java Script is the language of internate world”


function spaceCount(string){
 console.log(`Given string => ${string}`)
 let CountSpace = 0 ;

 for (let i = 0; i < string.length; i++) {

    if (string.charAt(i) === " ") {
        CountSpace++
    }
 }
 console.log(`There Are '${CountSpace}' Spaces In the given string`)
}

spaceCount("Revision is the mother of success");
spaceCount("Java Script is the language of internate world");
