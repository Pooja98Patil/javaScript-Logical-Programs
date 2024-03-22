// Palindrome: If the string is similar from the starting as well as the ending, then we can say 
// that the string is a palindrome.
// Define a function isPalindrome( ) with one argument and call this function by passing 
// below strings one by one. This function must return true if given argument string is 
// palindrome else, false in case not palindrome.
// o “madam”
// o “banana”
// o “radar”
// o “civil”
// o “noon”
// o “stats”


function isPalindrome(word){
    let revreseWord =  word.split('').reverse().join('');
    
    let result = revreseWord === word ? "True" : "False";
    console.log(`The given word is => '${word}' Palindrome => '${result}' `);
}

isPalindrome("madam");
isPalindrome("banana");
isPalindrome("radar");
isPalindrome("civil");
isPalindrome("noon");
isPalindrome("stats");