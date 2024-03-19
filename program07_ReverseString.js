// Reverse String: Recommended to use define the functions
//  Reverse the string using any existing methods that you know
//  "Software";
//  “UI Developer”;

console.log(`============Reverse the string using existing methods================`);

function ReverseWithPreDefine(word){
   let result01 = word.split('').reverse().join('');
   console.log(`The Reverse of the given string "${word}" is => ${result01}`);
}


ReverseWithPreDefine("Software");
ReverseWithPreDefine("UI Developer");




//  Reverse the string without using predefined methods.
//  "Web Developer";
//  “Billion Dollar”;
//  “Java”

console.log(' ');
console.log(`=================Reverse the string without using predefined methods================`);

function reverseStringwithoutPreDefine(str){
   let result02 = "";

   for (let index = str.length-1; index >= 0; index--) {
      result02 = result02 + str.charAt(index)
      
   }

   console.log(`The reverse of given String "${str}" is => ${result02}`);

  
}

reverseStringwithoutPreDefine("Web Developer");
reverseStringwithoutPreDefine("Billion Dollar");
reverseStringwithoutPreDefine("Java");