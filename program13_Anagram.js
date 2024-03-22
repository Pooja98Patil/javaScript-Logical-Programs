// Anagram: An anagram of a string is another string that contains the same characters, only the 
// order of characters can be different.
// Define a function isAnagram ( ) with two argument and call this function by passing 
// below strings. This function must return true if given strings is anagram else, false in 
// case not anagram.
// o “listen”, “silent”
// o “heart”, “earth”
// o “debit card”, “credit card”

function isAnagram(word1, word2){
    const str1 = word1.toLowerCase().split('').sort().join('');
    const str2 = word2.toLowerCase().split('').sort().join('');

    const result = str1 === str2 ? "True" : "False";

    console.log(`Is the Given words are Anagram "${word1}", "${word2}" => ${result}`);

}

isAnagram("listen","silent");
isAnagram("heart","earth");
isAnagram("debit card", "credit card");