// Reverse the words from given string: Define a function reverseWord( ) with one 
// argument and call this function by passing below strings one by one. 
// This function must return the string with reverse words.
// o Input String: "Arise! Awake! and stop not until the goal is reached";
//  Expected output: !esirA !ekawA dna pots ton litnu eht laog si dehcaer
// o Input String: “Learn with us, Job with us”
//  Expected output: nraeL htiw su, boJ htiw su


function reverseWord(str) {
  console.log(`The Given String => ${str}`)
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  
  
  console.log(`Result => ${reverseWord("Arise! Awake! and stop not until the goal is reached")}`); 
  
  console.log(`Result => ${reverseWord("Learn with us, Job with us")}`); 
