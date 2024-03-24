// Swapping String: Write a function swapWords(), which should swap the two words 
// without using third variable. This is a function with no argument and no return value.
// o const wordOne = “Angular”
// o const wordTwo = “React”



//You can swap the values of two variables without using a third variable using destructuring assignment. Here's how you can do it in JavaScript:


function swapWords(){
    let word1 = "Angular";
    let word2 = "React";

    console.log(`Before Swapping => word1: '${word1}', Word2 : '${word2}'`)

    // Concatenate the two words and use substrings to swap them
    word1 = word1 + word2; // Concatenate the two words
    word2 = word1.slice(0, word1.length - word2.length); // Extract the first word
  word1 = word1.slice(word2.length); // Extract the second word


  console.log(`After Swapping => word1: '${word1}', Word2 : '${word2}'`)

}

swapWords()